-- CreateTable
CREATE TABLE "ExtraServiceBlock" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "listItems" TEXT[],
    "footerText" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "ExtraServiceBlock_pkey" PRIMARY KEY ("id")
);
