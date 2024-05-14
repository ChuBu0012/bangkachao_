-- CreateTable
CREATE TABLE "Info" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "Info_pkey" PRIMARY KEY ("id")
);
