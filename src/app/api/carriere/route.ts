import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src/app/data/carriere.json");

// GET → lire les données
export async function GET() {
  const data = fs.readFileSync(filePath, "utf-8");
  return NextResponse.json(JSON.parse(data));
}

// POST → ajouter une candidature
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // validation simple
    if (
      !body.nom ||
      !body.prenom ||
      !body.email ||
      !body.numero ||
      !body.adresse ||
      !body.motivation
    ) {
      return NextResponse.json(
        { error: "Champs manquants" },
        { status: 400 }
      );
    }

    const data = fs.readFileSync(filePath, "utf-8");
    const candidatures = JSON.parse(data);

    const nouvelle = {
      id: Date.now(),
      ...body,
      createdAt: new Date().toISOString(),
    };

    candidatures.push(nouvelle);

    fs.writeFileSync(filePath, JSON.stringify(candidatures, null, 2));

    return NextResponse.json(nouvelle, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}