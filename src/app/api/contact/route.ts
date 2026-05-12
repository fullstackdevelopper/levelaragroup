import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(
  process.cwd(),
  "src/app/data/message.json"
);

// GET → lire les messages
export async function GET() {
  const data = fs.readFileSync(filePath, "utf-8");

  return NextResponse.json(JSON.parse(data));
}

// POST → ajouter un message
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // validation simple
    if (
      !body.nom ||
      !body.prenom ||
      !body.email ||
      !body.sujet ||
      !body.message
    ) {
      return NextResponse.json(
        { error: "Champs manquants" },
        { status: 400 }
      );
    }

    const data = fs.readFileSync(filePath, "utf-8");

    const messages = JSON.parse(data);

    const nouveauMessage = {
      id: Date.now(),
      ...body,
      createdAt: new Date().toISOString(),
    };

    messages.push(nouveauMessage);

    fs.writeFileSync(
      filePath,
      JSON.stringify(messages, null, 2)
    );

    return NextResponse.json(
      nouveauMessage,
      { status: 201 }
    );

  } catch (error) {

    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}