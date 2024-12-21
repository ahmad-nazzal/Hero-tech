import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const fakeDBPath = path.join(process.cwd(), "fakeDB", "db.json");

interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  username: string;
  country: string;
  favorites?: number[]; 
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json(
      { success: false, message: "Email is required" },
      { status: 400 }
    );
  }

  try {
    const dbContent = await fs.readFile(fakeDBPath, "utf-8");
    const db = JSON.parse(dbContent);

    const user = db.users.find((user: User) => user.email === email);

if (!user) {
  console.log("User not found for email:", email); 
  return NextResponse.json(
    { success: false, message: "User not found" },
    { status: 404 }
  );
}

console.log("User found:", user); 

    return NextResponse.json({
      success: true,
      favorites: user.favorites || [],
    });
  } catch (error) {
    console.error("Error reading database:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
