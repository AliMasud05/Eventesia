import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const url = new URL(request.url);
  const postId = url.searchParams.get("id");
  const username = url.searchParams.get("username");
  const email = url.searchParams.get("email");

  try {
    await connect(); // Connect to your database

    let query = {};

    if (postId) {
      query = { _id: postId }; // Search by ID
    } else if (username) {
      query = { username }; // Search by username
    } else if (email) {
      query = { email }; // Search by username
    }

    const posts = await Post.find(query);

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
export default async function handler(request, response) {
  if (request.method === 'PUT') {
    const { id } = request.query;

    try {
      await connect(); // Connect to your database

      const query = { _id: id }; // Search by ID
      const posts = await Post.find(query);

      return response.status(200).json(posts);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ message: 'Database Error' });
    }
  } else if (request.method === 'GET') {
    // Handle other operations or return a specific response for GET requests
    return response.status(200).json({ message: 'GET operation' });
  } else {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }
}




export const POST = async (request) => {
  const body = await request.json();

  const newPost = new Post(body);

  try {
    await connect();

    await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
export const DELETE = async (request) => {
  const postId = request.nextUrl.searchParams.get("id");

  try {
      await connect(); 
      
      const post = await Post.findByIdAndDelete(postId); 
      
      if (!post) {
          return new NextResponse("Post not found", { status: 404 });
        }

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};


