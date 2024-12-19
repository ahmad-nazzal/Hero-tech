import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import fs from "fs/promises";
import path from "path";
const fakeDBPath = path.join(process.cwd(), "fakeDB", "db.json");
export async function POST(request) {
  try {
    const objFromFrontEnd = await request.json();
    console.log("***************************************");
    console.log(
      "Received object from Front-end in POST function:",
      objFromFrontEnd
    );
    console.log("*****************  Hashing password_salt   **************************");
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(objFromFrontEnd.password, salt);

    const userWithHashedPassword = {
      ...objFromFrontEnd,
      password: hashedPassword,
    };
    const dbContent = await fs.readFile(fakeDBPath, "utf-8");
    const parsedData = dbContent ? JSON.parse(dbContent) : { users: [] };
    parsedData.users.push(userWithHashedPassword);
    await fs.writeFile(
      fakeDBPath,
      JSON.stringify(parsedData, null, 2),
      "utf-8"
    );
    return NextResponse.json({
      success: true,
      message: "User data successfully saved in db.json",
      data: objFromFrontEnd,
    });
  } catch (error) {
    console.error("Error saving user data:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to save user data in db.json",
        error: error.message,
      },
      { status: 500 }
    );
  }
}