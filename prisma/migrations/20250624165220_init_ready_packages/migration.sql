-- CreateTable
CREATE TABLE "ReadyPackage" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "features" TEXT[],
    "price" TEXT NOT NULL,
    "buttonText" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReadyPackage_pkey" PRIMARY KEY ("id")
);
