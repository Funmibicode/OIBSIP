import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

import connectDB from "../config/db.js";
import User from "../models/User.js";

dotenv.config();

const createAdmin = async () => {
  try {
    await connectDB();

    const adminEmail = "admin@pizzy.com";

    const existingAdmin = await User.findOne({
      email: adminEmail,
    });

    if (existingAdmin) {
      console.log("Admin account already exists.");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash("admin12345", 12);

    const admin = await User.create({
      name: "Pizzy Admin",
      email: adminEmail,
      password: hashedPassword,
      role: "admin",
      isEmailVerified: true,
    });

    console.log("Admin account created successfully.");
    console.log({
      id: admin._id,
      email: admin.email,
      role: admin.role,
    });

    process.exit(0);
  } catch (error) {
    console.error("Failed to create admin:", error.message);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
  }
};

createAdmin();