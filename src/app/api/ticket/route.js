
import Ticket from "@/models/Ticket";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const url = new URL(request.url);
  const postId = url.searchParams.get("id");
  const username = url.searchParams.get("username");
  const email = url.searchParams.get("email");
  const eventDate = url.searchParams.get("eventDate");

  try {
    await connect();

    let query = {};

    if (postId) {
      query = { _id: postId }; 
    } else if (username) {
      query = { username }; 
    } else if (email) {
      query = { email };
    }
     else if (eventDate) {
      query = { eventDate }; 
    }

    const posts = await Ticket.find(query);

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export default async function handler(request, response) {
  if (request.method === "PUT") {
    const { id } = request.query;

    try {
      await connect();

      const query = { _id: id }; 
      const posts = await Ticket.find(query);

      return response.status(200).json(posts);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ message: "Database Error" });
    }
  } else if (request.method === "GET") {
    
    return response.status(200).json({ message: "GET operation" });
  } else {
    return response.status(405).json({ message: "Method Not Allowed" });
  }
}



export const POST = async (request) => {
  const body = await request.json();

  const newTicket = new Ticket(body);

  try {
    await connect();

    await newTicket.save();

    return new NextResponse("Ticket has been booked", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
export const DELETE = async (request) => {
  const ticketId = request.nextUrl.searchParams.get("id");

  try {
    await connect();

    const ticket = await Ticket.findByIdAndDelete(ticketId);

    if (!ticket) {
      return new NextResponse("Ticket not found", { status: 404 });
    }

    return new NextResponse("Ticket has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
