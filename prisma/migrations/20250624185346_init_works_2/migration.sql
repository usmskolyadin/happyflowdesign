/*
  Warnings:

  - Added the required column `area` to the `Repair` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Repair` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Repair` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rooms` to the `Repair` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Repair" ADD COLUMN     "area" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "duration" TEXT NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "rooms" INTEGER NOT NULL;
