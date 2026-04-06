-- CreateTable
CREATE TABLE "contact_submissions" (
    "id" TEXT NOT NULL,
    "naam" TEXT NOT NULL,
    "bedrijf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "bericht" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contact_submissions_pkey" PRIMARY KEY ("id")
);
