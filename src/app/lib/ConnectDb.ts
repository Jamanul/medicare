import { Db, MongoClient, ServerApiVersion } from "mongodb";
let cachedClient: MongoClient | null = null;
let db: Db | null = null;
export const connectDb = async () => {
  try {
    if (db && cachedClient) {
      return db;
    }
    const uri = `mongodb+srv://${process.env.NEXT_PUBLIC_DB_USER}:${process.env.NEXT_PUBLIC_DB_PASSWORD}@cluster0.dibths0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    };
    const client = new MongoClient(uri, options);
    await client.connect();
    cachedClient = client;
    db = client.db("medicare");
    return db;
  } catch (error) {
    console.log(error);
    throw new Error("You have not connected to database server");
  }
};
