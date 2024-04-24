/*
  Warnings:

  - You are about to drop the column `key` on the `Bab` table. All the data in the column will be lost.
  - You are about to drop the column `tahun` on the `Sub_Bab` table. All the data in the column will be lost.
  - Added the required column `judul` to the `Sub_Bab` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Bab_key_key` ON `Bab`;

-- AlterTable
ALTER TABLE `Bab` DROP COLUMN `key`;

-- AlterTable
ALTER TABLE `Sub_Bab` DROP COLUMN `tahun`,
    ADD COLUMN `judul` VARCHAR(255) NOT NULL;
