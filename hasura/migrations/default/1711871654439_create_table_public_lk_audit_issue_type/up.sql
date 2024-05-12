CREATE TABLE "public"."lk_audit_issue_type" ("id" serial NOT NULL, "issue_type_name" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"), UNIQUE ("issue_type_name"));
