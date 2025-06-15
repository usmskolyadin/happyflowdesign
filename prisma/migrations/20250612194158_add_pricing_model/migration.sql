/*
  Warnings:

  - You are about to drop the `PricingConfig` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "PricingConfig";

-- CreateTable
CREATE TABLE "Pricing" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "pricePerM2" INTEGER NOT NULL,

    CONSTRAINT "Pricing_pkey" PRIMARY KEY ("id")
);
