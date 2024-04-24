/*
  Warnings:

  - You are about to drop the column `arsipId` on the `Dokumen` table. All the data in the column will be lost.
  - You are about to drop the `Arsip` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Data` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `sub_babId` to the `Dokumen` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Arsip` DROP FOREIGN KEY `Arsip_dataId_fkey`;

-- DropForeignKey
ALTER TABLE `Dokumen` DROP FOREIGN KEY `Dokumen_arsipId_fkey`;

-- AlterTable
ALTER TABLE `Dokumen` DROP COLUMN `arsipId`,
    ADD COLUMN `sub_babId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `Arsip`;

-- DropTable
DROP TABLE `Data`;

-- CreateTable
CREATE TABLE `Bab` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `key` VARCHAR(191) NOT NULL,
    `judul` VARCHAR(255) NOT NULL,
    `deskripsi` VARCHAR(191) NULL,
    `kategori` ENUM('sda', 'fasilitatif') NOT NULL DEFAULT 'sda',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Bab_key_key`(`key`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sub_Bab` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tahun` VARCHAR(4) NOT NULL,
    `babId` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Sub_Bab` ADD CONSTRAINT `Sub_Bab_babId_fkey` FOREIGN KEY (`babId`) REFERENCES `Bab`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Dokumen` ADD CONSTRAINT `Dokumen_sub_babId_fkey` FOREIGN KEY (`sub_babId`) REFERENCES `Sub_Bab`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
