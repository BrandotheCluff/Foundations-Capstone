CREATE TABLE "client" (
  "client_id" SERIAL PRIMARY KEY,
  "client_firstname" VARCHAR(50),
  "client_lastname" VARCHAR(50),
  "client_email" VARCHAR(50),
  "date" timestamp
);

CREATE TABLE "questions" (
  "question_id" SERIAL PRIMARY KEY,
  "questions" VARCHAR(500),
  'email' VARCHAR(50)
)