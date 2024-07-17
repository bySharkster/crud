import { getName } from "@/app/lib/functions";

export async function GET() {
  try {
    await getName();
    return new Response("name written successfully", { status: 201 });
  } catch (error) {
    return new Response("Couldn't create name", { status: 404 });
  }
}
