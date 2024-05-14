import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export function GET(req, res) {
  return Response.json({ message: "test" });
}
export async function POST(req) {
  const { name, gender, age } = await req.json();
  const newInfo = await prisma.info.create({
    data: {
      name,
      gender,
      age,
    },
  });
  return Response.json(newInfo);
}
