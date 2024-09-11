CREATE TABLE IF NOT EXISTS "goals" (
	"id" text PRIMARY KEY NOT NULL,
	"tittle" text NOT NULL,
	"desidered_weekle_freguency" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
