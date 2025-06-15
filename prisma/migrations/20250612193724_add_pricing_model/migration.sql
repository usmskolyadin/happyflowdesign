-- CreateTable
CREATE TABLE "PricingConfig" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "pricePerM2" INTEGER NOT NULL,

    CONSTRAINT "PricingConfig_pkey" PRIMARY KEY ("id")
);
