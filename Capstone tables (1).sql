CREATE TABLE "client" (
  "client_id" SERIAL PRIMARY KEY,
  "client_firstname" VARCHAR(50),
  "client_lastname" VARCHAR(50),
  "client_email" VARCHAR(50),
  "date" timestamp
);

CREATE TABLE "squat" (
  "squat_id" SERIAL PRIMARY KEY,
  "squat_value" integer,
  "client_id" int NOT NULL REFERENCES client(client_id)
);

CREATE TABLE "bench" (
  "bench_id" SERIAL PRIMARY KEY,
  "bench_value" integer,
  "client_id" int NOT NULL REFERENCES client(client_id)
);

CREATE TABLE "dead" (
  "dead_id" SERIAL PRIMARY KEY,
  "dead_value" integer,
  "client_id" int NOT NULL REFERENCES client(client_id)
);

CREATE TABLE "maxes" (
  "squat_id" int NOT NULL REFERENCES squat(squat_id),
  "bench_id" int NOT NULL REFERENCES bench(bench_id),
  "dead_id" int NOT NULL REFERENCES dead(dead_id),
  "client_id" int NOT NULL REFERENCES client(client_id)
)
