import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '@/lib/mongodb'
import bcrypt from 'bcryptjs'
import fs from 'fs'
import { promises as fsp } from 'fs'
import path from 'path'

type Data = { message?: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { firstName, lastName, email, password } = req.body || {}

  if (!email || !password || !firstName || !lastName) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  try {
    const client = await clientPromise

    // If there is no MongoDB client (MONGODB_URI not set), fall back to a
    // lightweight file-based store under ./data/dev-users.json for local dev.
    if (!client) {
      const dataDir = path.join(process.cwd(), 'data')
      const filePath = path.join(dataDir, 'dev-users.json')
      await fsp.mkdir(dataDir, { recursive: true })
      let users: any[] = []
      try {
        const raw = await fsp.readFile(filePath, 'utf8')
        users = JSON.parse(raw || '[]')
      } catch (err) {
        users = []
      }

      const emailLower = String(email).toLowerCase()
      if (users.find((u) => u.email === emailLower)) {
        return res.status(409).json({ message: 'User already exists' })
      }

      const hashed = await bcrypt.hash(String(password), 10)
      users.push({ firstName: String(firstName), lastName: String(lastName), email: emailLower, password: hashed, createdAt: new Date().toISOString() })
      await fsp.writeFile(filePath, JSON.stringify(users, null, 2), 'utf8')
      return res.status(201).json({ message: 'User created (dev fallback)' })
    }

    const db = client.db()
    const users = db.collection('users')

    const existing = await users.findOne({ email: String(email).toLowerCase() })
    if (existing) {
      return res.status(409).json({ message: 'User already exists' })
    }

    const hashed = await bcrypt.hash(String(password), 10)

    await users.insertOne({
      firstName: String(firstName),
      lastName: String(lastName),
      email: String(email).toLowerCase(),
      password: hashed,
      createdAt: new Date(),
    })

    return res.status(201).json({ message: 'User created' })
  } catch (err: any) {
    console.error('Registration error:', err)
    // Return a sanitized error message to the client
    return res.status(500).json({ message: err?.message || 'Internal server error' })
  }
}
