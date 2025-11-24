// export const dynamic = "force-dynamic"; 
// // Ensures Firestore works in Next.js API routes
// import { db } from "@/lib/firebase";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";


// export async function POST(req) {
//   try {
//     const body = await req.json();

//     // Remove undefined/null fields
//     const data = {
//       firstName: body.firstName ?? "",
//       lastName: body.lastName ?? "",
//       email: body.email ?? "",
//       phone: body.phone ?? "",
//       message: body.message ?? "",
//       createdAt: serverTimestamp(),
//     };

//     await addDoc(collection(db, "contacts"), data);

//     return Response.json({ success: true });
//   } catch (err) {
//     console.error("Error saving contact message:", err);
//     return Response.json(
//       { success: false, error: err.message },
//       { status: 500 }
//     );
//   }
// }



import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const body = await req.json();

    // Save to Firestore
    const data = {
      firstName: body.firstName ?? "",
      lastName: body.lastName ?? "",
      email: body.email ?? "",
      phone: body.phone ?? "",
      message: body.message ?? "",
      createdAt: serverTimestamp(),
    };
    await addDoc(collection(db, "contacts"), data);

    // Send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // or another receiving email
      subject: `New Contact Message from ${body.firstName} ${body.lastName}`,
      text: `Email: ${body.email}\nPhone: ${body.phone}\nMessage: ${body.message}`,
    });
    console.log("Email sent info:", info);
    return Response.json({ success: true,
        emailSentTo: info.accepted,
        messageId: info.messageId,
     });
  } catch (err) {
    console.error("Error handling contact form:", err);
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}
