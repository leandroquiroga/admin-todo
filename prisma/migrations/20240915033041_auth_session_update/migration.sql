-- AlterTable
ALTER TABLE "Session" ADD COLUMN     "role" TEXT[] DEFAULT ARRAY['user']::TEXT[];
