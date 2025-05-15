/*
  Warnings:

  - You are about to drop the column `isProperty` on the `Assets` table. All the data in the column will be lost.
  - You are about to drop the column `const_name` on the `Constants` table. All the data in the column will be lost.
  - You are about to drop the column `created_date` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `modified_date` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[code]` on the table `Constants` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Constants_const_name_key";

-- AlterTable
ALTER TABLE "Assets" DROP COLUMN "isProperty",
ALTER COLUMN "valuation_method" DROP NOT NULL,
ALTER COLUMN "valuation_date" DROP NOT NULL,
ALTER COLUMN "created_date" DROP NOT NULL,
ALTER COLUMN "modified_date" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Constants" DROP COLUMN "const_name";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "created_date",
DROP COLUMN "modified_date",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "modifiedAt" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "Constants_code_key" ON "Constants"("code");
