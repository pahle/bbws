/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `Profile` DROP FOREIGN KEY `Profile_userId_fkey`;

-- DropTable
DROP TABLE `Post`;

-- DropTable
DROP TABLE `Profile`;

-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `Data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `key` VARCHAR(191) NOT NULL,
    `judul` VARCHAR(255) NOT NULL,
    `deskripsi` VARCHAR(191) NULL,
    `arsipId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Data_key_key`(`key`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Arsip` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tahun` VARCHAR(4) NOT NULL,
    `dokumenId` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dokumen` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_surat` VARCHAR(255) NOT NULL,
    `tahun` VARCHAR(4) NOT NULL,
    `judul` VARCHAR(255) NOT NULL,
    `file` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Data` ADD CONSTRAINT `Data_arsipId_fkey` FOREIGN KEY (`arsipId`) REFERENCES `Arsip`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Arsip` ADD CONSTRAINT `Arsip_dokumenId_fkey` FOREIGN KEY (`dokumenId`) REFERENCES `Dokumen`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
