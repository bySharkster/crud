import { createName } from "@/app/lib/functions";

export async function POST(req: Request) {
  // fuck req.body in the ass
  const { name } = await req.json();

  try {
    await createName(name);
    return new Response("name created successfully", { status: 201 });
  } catch (error) {
    return new Response("Couldn't create name", { status: 404 });
  }
}
