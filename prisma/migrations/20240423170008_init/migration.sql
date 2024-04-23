/*
  Warnings:

  - You are about to drop the column `dokumenId` on the `Arsip` table. All the data in the column will be lost.
  - You are about to drop the column `arsipId` on the `Data` table. All the data in the column will be lost.
  - Added the required column `dataId` to the `Arsip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `arsipId` to the `Dokumen` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Arsip` DROP FOREIGN KEY `Arsip_dokumenId_fkey`;

-- DropForeignKey
ALTER TABLE `Data` DROP FOREIGN KEY `Data_arsipId_fkey`;

-- AlterTable
ALTER TABLE `Arsip` DROP COLUMN `dokumenId`,
    ADD COLUMN `dataId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Data` DROP COLUMN `arsipId`;

-- AlterTable
ALTER TABLE `Dokumen` ADD COLUMN `arsipId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Arsip` ADD CONSTRAINT `Arsip_dataId_fkey` FOREIGN KEY (`dataId`) REFERENCES `Data`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Dokumen` ADD CONSTRAINT `Dokumen_arsipId_fkey` FOREIGN KEY (`arsipId`) REFERENCES `Arsip`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
