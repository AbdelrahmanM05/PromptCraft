import mongoose from "mongoose";

let isConnceted = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  console.log(process.env.MONGODB_URI);
  if (isConnceted) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnfiedTopology: true,
    });

    isConnceted = true;
    console.log("MongoDB is connect");
  } catch (error) {
    console.log(error);
  }
};
