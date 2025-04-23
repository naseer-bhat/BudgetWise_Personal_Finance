import { connect } from "mongoose";
export const connectToDB = async (dbUrl) => {
  try {
    await connect(dbUrl);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};
