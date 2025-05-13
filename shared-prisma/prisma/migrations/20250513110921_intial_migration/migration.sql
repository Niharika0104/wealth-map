-- CreateTable
CREATE TABLE "Users" (
    "user_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone_number" TEXT,
    "region" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "mfa_enabled" BOOLEAN NOT NULL,
    "created_by" TEXT,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_by" TEXT,
    "modified_date" TIMESTAMP(3),
    "last_login" TIMESTAMP(3),

    CONSTRAINT "Users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Employees" (
    "user_id" TEXT NOT NULL,
    "company_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Companies" (
    "company_id" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "created_by" TEXT,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_by" TEXT,
    "modified_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Companies_pkey" PRIMARY KEY ("company_id")
);

-- CreateTable
CREATE TABLE "Assets" (
    "asset_id" TEXT NOT NULL,
    "asset_type_id" TEXT NOT NULL,
    "description" TEXT,
    "region" TEXT,
    "quantity" DOUBLE PRECISION,
    "unit_of_measurement" TEXT,
    "unit_value" DOUBLE PRECISION,
    "total_value" DOUBLE PRECISION,
    "income_generated" DOUBLE PRECISION,
    "valuation_method" TEXT NOT NULL,
    "valuation_date" TIMESTAMP(3) NOT NULL,
    "source_platform" TEXT,
    "created_by" TEXT,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_by" TEXT,
    "modified_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Assets_pkey" PRIMARY KEY ("asset_id")
);

-- CreateTable
CREATE TABLE "CandidateAssetOwnership" (
    "id" TEXT NOT NULL,
    "asset_id" TEXT NOT NULL,
    "candidate_id" TEXT NOT NULL,
    "ownership_percentage" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "CandidateAssetOwnership_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Candidates" (
    "candidate_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "country_name" TEXT NOT NULL,
    "created_by" TEXT,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_by" TEXT,
    "modified_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Candidates_pkey" PRIMARY KEY ("candidate_id")
);

-- CreateTable
CREATE TABLE "Logging" (
    "user_activity_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "action_type" TEXT NOT NULL,
    "activity_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_by" TEXT,
    "modified_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Logging_pkey" PRIMARY KEY ("user_activity_id")
);

-- CreateTable
CREATE TABLE "Views" (
    "view_id" TEXT NOT NULL,
    "property_id" TEXT NOT NULL,
    "viewed_by_whom" TEXT NOT NULL,
    "viewed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Views_pkey" PRIMARY KEY ("view_id")
);

-- CreateTable
CREATE TABLE "Bookmarks" (
    "bookmark_id" TEXT NOT NULL,
    "property_id" TEXT NOT NULL,
    "bookmarked_by_whom" TEXT NOT NULL,
    "bookmarked_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Bookmarks_pkey" PRIMARY KEY ("bookmark_id")
);

-- CreateTable
CREATE TABLE "Constants" (
    "const_id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Constants_pkey" PRIMARY KEY ("const_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Employees_user_id_key" ON "Employees"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Constants_code_key" ON "Constants"("code");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_role_fkey" FOREIGN KEY ("role") REFERENCES "Constants"("const_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employees" ADD CONSTRAINT "Employees_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employees" ADD CONSTRAINT "Employees_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Companies"("company_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assets" ADD CONSTRAINT "Assets_asset_type_id_fkey" FOREIGN KEY ("asset_type_id") REFERENCES "Constants"("const_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidateAssetOwnership" ADD CONSTRAINT "CandidateAssetOwnership_asset_id_fkey" FOREIGN KEY ("asset_id") REFERENCES "Assets"("asset_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidateAssetOwnership" ADD CONSTRAINT "CandidateAssetOwnership_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "Candidates"("candidate_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Logging" ADD CONSTRAINT "Logging_action_type_fkey" FOREIGN KEY ("action_type") REFERENCES "Constants"("const_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Logging" ADD CONSTRAINT "Logging_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Views" ADD CONSTRAINT "Views_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "Assets"("asset_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmarks" ADD CONSTRAINT "Bookmarks_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "Assets"("asset_id") ON DELETE RESTRICT ON UPDATE CASCADE;
