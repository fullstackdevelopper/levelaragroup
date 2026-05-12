import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const filePath = path.join(
  process.cwd(),
  "src/app/data/message-form.json"
)

export async function POST(req: Request) {

  try {

    const body = await req.json()

    // Création du fichier si absent
    if (!fs.existsSync(filePath)) {

      fs.writeFileSync(
        filePath,
        JSON.stringify([], null, 2)
      )
    }

    // Lecture du fichier
    const fileContent = fs.readFileSync(
      filePath,
      "utf-8"
    )

    const messages = JSON.parse(fileContent)

    // Ajout du message
    const newMessage = {
      id: Date.now(),
      ...body,
      createdAt: new Date().toISOString(),
    }

    messages.push(newMessage)

    // Sauvegarde
    fs.writeFileSync(
      filePath,
      JSON.stringify(messages, null, 2)
    )

    return NextResponse.json({
      success: true,
      message: "Message enregistré",
    })

  } catch (error) {

    console.error("ERREUR API :", error)

    return NextResponse.json(
      {
        error: "Erreur serveur",
      },
      {
        status: 500,
      }
    )
  }
}