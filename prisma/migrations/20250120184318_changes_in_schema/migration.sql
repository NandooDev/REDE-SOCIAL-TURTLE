/*
  Warnings:

  - You are about to drop the column `company_code` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `position` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the `Companys` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Profile` DROP FOREIGN KEY `Profile_id_user_fkey`;

-- DropForeignKey
ALTER TABLE `Users` DROP FOREIGN KEY `Users_company_code_fkey`;

-- DropIndex
DROP INDEX `Users_company_code_fkey` ON `Users`;

-- AlterTable
ALTER TABLE `Users` DROP COLUMN `company_code`,
    DROP COLUMN `position`,
    DROP COLUMN `role`,
    ADD COLUMN `bio` VARCHAR(100) NULL,
    ADD COLUMN `followers` INTEGER NULL;

-- DropTable
DROP TABLE `Companys`;

-- DropTable
DROP TABLE `Profile`;
