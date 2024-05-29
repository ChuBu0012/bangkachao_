import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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

// export async function DELETE(req) {
//   const deletedInfo = await prisma.info.deleteMany();

//   return Response.json({ status: 200, body: deletedInfo });
// }