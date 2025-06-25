-- CreateTable
CREATE TABLE "RepairType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "RepairType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Repair" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "photos" TEXT[],
    "typeId" INTEGER NOT NULL,
    "workList" TEXT[],

    CONSTRAINT "Repair_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Repair" ADD CONSTRAINT "Repair_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "RepairType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
