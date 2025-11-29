import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI

let clientPromise: Promise<MongoClient | null>

if (!uri) {
  console.warn('MONGODB_URI is not set — MongoDB client will be unavailable.')
  clientPromise = Promise.resolve(null as any)
} else {
  let cached: { client?: MongoClient; promise?: Promise<MongoClient> } = globalThis as any
  if (!cached) cached = {}
  if (!cached.promise) {
    const client = new MongoClient(uri!)
    cached.client = client
    cached.promise = client.connect()
  }
  clientPromise = cached.promise
}

export default clientPromise
