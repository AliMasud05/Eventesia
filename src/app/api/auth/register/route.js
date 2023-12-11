import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const formData = await request.json();

  await connect();
  delete formData.confirmPassword;
  const hashedPassword = await bcrypt.hash(formData.password, 5);
  formData.password = hashedPassword;
  console.log(formData);

  const newUser = new User(formData);

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
export const GET = async (request) => {
  const url = new URL(request.url);

  const userId = url.searchParams.get("id");
  const username = url.searchParams.get("username");
  const email = url.searchParams.get("email");

  await connect(); // Connect to your database
  try {
    let query = {};

    if (userId) {
      query = { _id: userId }; // Search by ID
    } else if (username) {
      query = { username }; // Search by username
    } else if (email) {
      query = { email }; // Search by username
    }
    if (email) {
      query = { email };
    }
    const user = await User.find(query);
    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};

export const DELETE = async (request) => {
  const postId = request.nextUrl.searchParams.get("id");

  try {
    await connect(); // Connect to your database

    const post = await User.findByIdAndDelete(postId); // Find and delete the post by its ID

    if (!post) {
      return new NextResponse("Post not found", { status: 404 });
    }
    return new NextResponse("user has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const PUT = async (request) => {
   const formData = await request.json();
   const postId = request.nextUrl.searchParams.get("id");

   await connect();
   

   
   try { 
    const result = await User.findByIdAndUpdate({_id:postId},formData)
     return new NextResponse("User has been created", {
       status: 201,
     });
   } catch (err) {
     return new NextResponse(err.message, {
       status: 500,
     });
   }
};
