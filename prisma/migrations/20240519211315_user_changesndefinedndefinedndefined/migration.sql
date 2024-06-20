-- CreateTable
CREATE TABLE "Users" (
    "id" VARCHAR NOT NULL,
    "name" VARCHAR NOT NULL,
    "isAdmin" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "roles" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);
