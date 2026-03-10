import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Veuillez remplir les champs obligatoires." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Adresse email invalide." },
        { status: 400 }
      );
    }

    console.log("Nouveau message portfolio :", {
      name,
      email,
      subject,
      message,
    });

    return NextResponse.json(
      { message: "Message reçu avec succès." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Erreur serveur, veuillez réessayer." },
      { status: 500 }
    );
  }
}