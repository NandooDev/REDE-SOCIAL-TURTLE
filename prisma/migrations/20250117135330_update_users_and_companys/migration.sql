/*
  Warnings:

  - A unique constraint covering the columns `[company_code]` on the table `Companys` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Companys_company_code_key` ON `Companys`(`company_code`);

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_company_code_fkey` FOREIGN KEY (`company_code`) REFERENCES `Companys`(`company_code`) ON DELETE RESTRICT ON UPDATE CASCADE;
