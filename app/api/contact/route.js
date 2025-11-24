export const dynamic = "force-dynamic"; 
// Ensures Firestore works in Next.js API routes
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


export async function POST(req) {
  try {
    const body = await req.json();

    // Remove undefined/null fields
    const data = {
      firstName: body.firstName ?? "",
      lastName: body.lastName ?? "",
      email: body.email ?? "",
      phone: body.phone ?? "",
      message: body.message ?? "",
      createdAt: serverTimestamp(),
    };

    await addDoc(collection(db, "contacts"), data);

    return Response.json({ success: true });
  } catch (err) {
    console.error("Error saving contact message:", err);
    return Response.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
