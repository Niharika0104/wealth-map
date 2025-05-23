/*
  Warnings:

  - A unique constraint covering the columns `[address]` on the table `property` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "property_address_key" ON "property"("address");
