/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "History" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "winner" TEXT,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);
