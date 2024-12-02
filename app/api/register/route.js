import { NextResponse } from "next/server";
//import bcrypt from "bcrypt";

export async function POST(request) {
  // 1- Receive data from Front-end
  const objFromFrontEnd = await request.json();
  console.log("*********************************************");
  console.log("Received object from Front-end to Back-end in POST function. Printed in terminal:", objFromFrontEnd);

  // 2- connect to FakeDB


  // 3- Hashing password with bcrypt.js

  // 4- Try to Store obj to FakeDB

  // 5- Go back to frontend
  return NextResponse.json({});
}
