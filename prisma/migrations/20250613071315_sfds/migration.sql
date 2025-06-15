-- CreateTable
CREATE TABLE "PricingCard" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "features" TEXT[],
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "PricingCard_pkey" PRIMARY KEY ("id")
);
