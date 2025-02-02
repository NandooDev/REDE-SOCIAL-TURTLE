-- DropForeignKey
ALTER TABLE `Coments` DROP FOREIGN KEY `Coments_id_post_fkey`;

-- DropForeignKey
ALTER TABLE `Coments` DROP FOREIGN KEY `Coments_id_user_fkey`;

-- DropForeignKey
ALTER TABLE `Likes` DROP FOREIGN KEY `Likes_id_post_fkey`;

-- DropForeignKey
ALTER TABLE `Likes` DROP FOREIGN KEY `Likes_id_user_fkey`;

-- DropForeignKey
ALTER TABLE `Posts` DROP FOREIGN KEY `Posts_id_user_fkey`;

-- DropIndex
DROP INDEX `Coments_id_post_fkey` ON `Coments`;

-- DropIndex
DROP INDEX `Coments_id_user_fkey` ON `Coments`;

-- DropIndex
DROP INDEX `Likes_id_post_fkey` ON `Likes`;

-- DropIndex
DROP INDEX `Likes_id_user_fkey` ON `Likes`;

-- DropIndex
DROP INDEX `Posts_id_user_fkey` ON `Posts`;

-- AddForeignKey
ALTER TABLE `Posts` ADD CONSTRAINT `Posts_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Coments` ADD CONSTRAINT `Coments_id_post_fkey` FOREIGN KEY (`id_post`) REFERENCES `Posts`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Coments` ADD CONSTRAINT `Coments_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Likes` ADD CONSTRAINT `Likes_id_post_fkey` FOREIGN KEY (`id_post`) REFERENCES `Posts`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Likes` ADD CONSTRAINT `Likes_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
