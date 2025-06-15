/*
  Warnings:

  - The primary key for the `Calculation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Calculation` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Factor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Factor` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `FactorValue` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `FactorValue` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VerificationToken` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `calculationId` on the `FactorValue` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `factorId` on the `FactorValue` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "FactorValue" DROP CONSTRAINT "FactorValue_calculationId_fkey";

-- DropForeignKey
ALTER TABLE "FactorValue" DROP CONSTRAINT "FactorValue_factorId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- AlterTable
ALTER TABLE "Calculation" DROP CONSTRAINT "Calculation_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Calculation_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Factor" DROP CONSTRAINT "Factor_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Factor_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "FactorValue" DROP CONSTRAINT "FactorValue_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "calculationId",
ADD COLUMN     "calculationId" INTEGER NOT NULL,
DROP COLUMN "factorId",
ADD COLUMN     "factorId" INTEGER NOT NULL,
ADD CONSTRAINT "FactorValue_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Account";

-- DropTable
DROP TABLE "Session";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "VerificationToken";

-- AddForeignKey
ALTER TABLE "FactorValue" ADD CONSTRAINT "FactorValue_calculationId_fkey" FOREIGN KEY ("calculationId") REFERENCES "Calculation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FactorValue" ADD CONSTRAINT "FactorValue_factorId_fkey" FOREIGN KEY ("factorId") REFERENCES "Factor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
