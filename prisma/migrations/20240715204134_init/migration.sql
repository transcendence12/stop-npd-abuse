-- CreateTable
CREATE TABLE "Specialist" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "specialisationType" TEXT[],
    "website" TEXT,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "whatsApp" BOOLEAN NOT NULL,
    "city" TEXT,
    "online" BOOLEAN NOT NULL,
    "acceptsNfz" BOOLEAN NOT NULL,
    "acceptsPrivate" BOOLEAN NOT NULL,
    "company" TEXT,
    "books" TEXT[],

    CONSTRAINT "Specialist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialMediaLink" (
    "id" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "specialistId" TEXT NOT NULL,

    CONSTRAINT "SocialMediaLink_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SocialMediaLink" ADD CONSTRAINT "SocialMediaLink_specialistId_fkey" FOREIGN KEY ("specialistId") REFERENCES "Specialist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
