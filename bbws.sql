-- MySQL dump 10.13  Distrib 8.3.0, for macos14.2 (arm64)
--
-- Host: localhost    Database: bbws
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('320a0ce3-94ee-49a3-b2b2-443e5777c43d','ec69a94c04d768124d03d40c5f19205361df550a67ff612268d15ce313e9e601','2024-04-24 12:54:41.080','20240423165805_init',NULL,NULL,'2024-04-24 12:54:41.051',1),('55f3455d-dff9-4569-8efb-e478556f343f','9dd2fef1b4ae8725fc6cca595e388acb0d31c12da41607fd2eca65181583ab1c','2024-04-24 12:55:36.507','20240424125536_init',NULL,NULL,'2024-04-24 12:55:36.497',1),('83350bcb-400e-449a-bddb-fd4c28db4e16','9f15d51d63e644157966843f263bc51c174e1dc73490dd42b5ac4d62a4814765','2024-04-24 12:54:41.114','20240423171515_init',NULL,NULL,'2024-04-24 12:54:41.110',1),('b1564974-524c-4706-9587-a5a8f01fabeb','688955fe6c81b31a22be6d0d49888ed10c3cde538ba4ddc103fb398915fe714a','2024-04-24 12:54:41.337','20240424125441_init',NULL,NULL,'2024-04-24 12:54:41.308',1),('e5c4d834-b689-4fc6-aca1-80206c6725d0','7c836245a3cfba559918674062b4165c8ce536465695e740c74f352782dfe2a6','2024-04-24 12:54:41.050','20240423164423_init',NULL,NULL,'2024-04-24 12:54:41.020',1),('ebeca008-675f-4c7c-b11a-e6560a944aed','327b17dcd21d3bbc7aaa6ff52de44cfa6af9d051b6410f8211ead1da16a6978e','2024-04-24 12:54:41.109','20240423170008_init',NULL,NULL,'2024-04-24 12:54:41.081',1),('edb293c1-ebc6-45de-91c2-15b6bbdb3bd6','664f9daba7d33863e47f9d1445378c0ecf62d69b210b875b72644818944b4ac0','2024-04-28 09:39:27.613','20240428093927_init',NULL,NULL,'2024-04-28 09:39:27.608',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Bab`
--

DROP TABLE IF EXISTS `Bab`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Bab` (
  `id` int NOT NULL AUTO_INCREMENT,
  `judul` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deskripsi` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `kategori` enum('sda','fasilitatif') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'sda',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Bab`
--

LOCK TABLES `Bab` WRITE;
/*!40000 ALTER TABLE `Bab` DISABLE KEYS */;
INSERT INTO `Bab` VALUES (1,'PJPA','Rekaman kegiatan yang berkaitan dengan Bidang Pelaksanaan Jaringan Pemanfaatan Air','sda','2024-04-24 12:59:55.809','2024-04-24 12:57:32.898'),(2,'PJSA','Rekaman kegiatan yang berkaitan dengan Bidang Pelaksanaan Jaringan Sumber Air','sda','2024-04-24 13:00:28.692','2024-04-24 12:59:56.821'),(3,'Bendungan','Rekaman kegiatan yang berkaitan dengan Bendungan','sda','2024-04-24 13:00:41.494','2024-04-24 13:00:30.389'),(4,'OP','Rekaman kegiatan yang berkaitan dengan Operasi dan Pemeliharaan','sda','2024-04-24 13:00:55.029','2024-04-24 13:00:42.387'),(5,'ATAB','Rekaman kegiatan yang berkaitan dengan Air Tanah Air Baku','sda','2024-04-24 13:01:08.712','2024-04-24 13:01:19.774'),(6,'SatkerBalai','Rekaman kegiatan yang berkaitan dengan Satuan Kerja Balai','sda','2024-04-24 13:01:38.907','2024-04-24 13:05:08.791'),(7,'Hukum','Rekaman kegiatan yang berkaitan dengan penyusunan produk Hukum','fasilitatif','2024-04-28 14:53:20.064','2024-04-28 14:58:17.674'),(8,'Kepegawaian','Rekaman kegiatan yang berkaitan dengan penyusunan informasi Kepegawaian','fasilitatif','2024-04-28 14:59:04.864','2024-04-28 14:58:18.376'),(9,'Keuangan','Rekaman kegiatan yang berkaitan dengan penyusunan target dan pagu indikatif Penerimaan Negara Bukan Pajak','fasilitatif','2024-04-28 14:59:36.175','2024-04-28 14:59:41.213'),(10,'Organisasi dan Tata Laksana','Rekaman kegiatan yang berkaitan dengan perencanaan, penyusunan hingga pengesahan, evaluasi dan pengembangan struktur organisasi Kementerian Pekerjaan Umum dan Perumahan Rakyat','fasilitatif','2024-04-28 14:59:50.684','2024-04-28 15:01:10.957'),(11,'Pengelolaan Data','Rekaman kegiatan yang berkaitan dengan pengelolaan informasi dan data administrasi','fasilitatif','2024-04-28 15:01:10.957','2024-04-28 15:00:22.006'),(12,'Pengadaan Barang dan Jasa','Rekaman kegiatan yang berkaitan dengan kegiatan pengadaan barang','fasilitatif','2024-04-28 15:01:45.380','2024-04-28 15:01:17.927'),(13,'Penanaman Modal','Rekaman kegiatan yang berkaitan dengan kegiatan menanam modal','fasilitatif','2024-04-28 15:02:21.720','2024-04-28 15:01:54.424'),(14,'Perencanaan','Rekaman kegiatan yang berkaitan dengan penyusunan rencana dan program masing-masing unit kerja/unit organisasi.','fasilitatif','2024-04-28 15:02:40.165','2024-04-28 15:02:22.557'),(15,'Pengelolaan Aset Barang Milik Negara','Rekaman kegiatan yang berkaitan dengan pengadaan aset lancar','fasilitatif','2024-04-28 15:03:10.142','2024-04-28 15:02:48.007'),(16,'Pengawasan','Rekaman kegiatan yang berkaitan dengan pelaksanaan pemeriksaan administrasi umum','fasilitatif','2024-04-28 15:03:52.080','2024-04-28 15:03:11.022'),(17,'Umum','Rekaman kegiatan yang berkaitan dengan administrasi pelaksanaan upacara','fasilitatif','2024-04-28 15:04:22.926','2024-04-28 15:04:35.425');
/*!40000 ALTER TABLE `Bab` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Dokumen`
--

DROP TABLE IF EXISTS `Dokumen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Dokumen` (
  `id` int NOT NULL AUTO_INCREMENT,
  `kode_surat` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tahun` varchar(4) COLLATE utf8mb4_unicode_ci NOT NULL,
  `judul` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  `sub_babId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Dokumen_sub_babId_fkey` (`sub_babId`),
  CONSTRAINT `Dokumen_sub_babId_fkey` FOREIGN KEY (`sub_babId`) REFERENCES `Sub_Bab` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Dokumen`
--

LOCK TABLES `Dokumen` WRITE;
/*!40000 ALTER TABLE `Dokumen` DISABLE KEYS */;
INSERT INTO `Dokumen` VALUES (30,'Surat 12','2000','Surat 1','wimaya.pdf','2024-04-28 15:25:39.140','2024-04-28 16:14:15.721',19),(31,'Surat 10','2000','Surat 10','wimaya.pdf','2024-04-28 15:50:57.651','2024-04-28 15:50:57.651',1);
/*!40000 ALTER TABLE `Dokumen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sub_Bab`
--

DROP TABLE IF EXISTS `Sub_Bab`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Sub_Bab` (
  `id` int NOT NULL AUTO_INCREMENT,
  `babId` int NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  `judul` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Sub_Bab_babId_fkey` (`babId`),
  CONSTRAINT `Sub_Bab_babId_fkey` FOREIGN KEY (`babId`) REFERENCES `Bab` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sub_Bab`
--

LOCK TABLES `Sub_Bab` WRITE;
/*!40000 ALTER TABLE `Sub_Bab` DISABLE KEYS */;
INSERT INTO `Sub_Bab` VALUES (1,1,'2024-04-24 13:06:41.390','2024-04-24 13:06:17.282','IRWA I'),(2,1,'2024-04-24 13:06:49.272','2024-04-24 13:07:21.436','IRWA II'),(3,2,'2024-04-24 13:07:21.436','2024-04-24 13:06:51.766','SUPAN I'),(4,2,'2024-04-24 13:07:28.003','2024-04-24 13:07:23.416','SUPAN II'),(5,2,'2024-04-24 13:07:49.485','2024-04-24 13:07:29.413','PLG Merapi'),(6,3,'2024-04-24 13:08:05.785','2024-04-24 13:07:51.396','Perencanaan I'),(7,3,'2024-04-24 13:08:16.820','2024-04-24 13:08:06.613','Perencanaan II'),(8,3,'2024-04-24 13:08:31.071','2024-04-24 13:08:18.614','Perencanaan III'),(9,4,'2024-04-24 13:09:10.535','2024-04-24 13:09:01.413','OP I'),(10,4,'2024-04-24 13:09:16.534','2024-04-24 13:09:11.380','OP II'),(11,4,'2024-04-24 13:09:28.668','2024-04-24 13:09:17.200','OP III'),(12,5,'2024-04-24 13:09:35.467','2024-04-24 13:09:29.830','ATAB I'),(13,5,'2024-04-24 13:09:41.600','2024-04-24 13:09:36.110','ATAB II'),(14,6,'2024-04-24 13:09:59.735','2024-04-24 13:09:42.194','PPK PP'),(15,6,'2024-04-24 13:10:13.600','2024-04-24 13:10:00.960','TATA LAKSANA'),(16,6,'2024-04-24 13:10:20.584','2024-04-24 13:10:14.279','BMN'),(17,6,'2024-04-24 13:10:27.286','2024-04-24 13:10:21.680','PSDA'),(19,7,'2024-04-28 15:21:55.047','2024-04-28 15:21:55.047','2018');
/*!40000 ALTER TABLE `Sub_Bab` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_username_key` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (1,'admin','admin','admin','2024-04-28 10:05:30.289','2024-04-28 09:42:30.952'),(2,'operator','operator','operator','2024-04-28 10:05:41.469','2024-04-28 10:05:33.630'),(3,'user','user','user','2024-04-28 10:05:49.518','2024-04-28 10:05:54.484');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-29  0:45:12
