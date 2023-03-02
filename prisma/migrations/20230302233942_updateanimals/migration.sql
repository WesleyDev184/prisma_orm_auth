/*
  Warnings:

  - A unique constraint covering the columns `[number]` on the table `animals` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "animals_number_key" ON "animals"("number");
