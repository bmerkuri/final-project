 --Boards
INSERT INTO "public"."boards" ("id", "name")

SELECT 
  ("board") AS "id",
  CONCAT('board', "board") AS "name"
  

FROM generate_series(1, 100) AS "board"

ON CONFLICT ON CONSTRAINT "boards_pkey"
DO UPDATE SET
  "id" = EXCLUDED."id",
  "name" = EXCLUDED."name";


INSERT INTO "public"."users" ("id", "name")
SELECT 
  ("user") AS "id",
  CONCAT('user', "user") AS "name"
 
  FROM generate_series(1, 100) AS "user"

ON CONFLICT ON CONSTRAINT "users_pkey"
DO UPDATE SET
  "id" = EXCLUDED."id",
  "name" = EXCLUDED."name";  
 

 INSERT INTO "public"."boards_admins" ("board_id", "user_id")

SELECT 
  ("board") AS "board_id",
  ("board") AS "user_id"
  
FROM generate_series(1, 100) AS "board"

ON CONFLICT ON CONSTRAINT "board_admins_pkey"
DO UPDATE SET
  "board_id" = EXCLUDED."board_id",
  "user_id" = EXCLUDED."user_id"; 


 INSERT INTO "public"."surveys" ("board_id", "created_at","updated_at","opens_at" , "closes_at")

SELECT 
 (floor(random() * (100 - 1 +1) +1)) AS "board_id",
now() - '30d'::INTERVAL * random() AS "created_at",
now() - '30d'::INTERVAL * random() AS "updated_at",
now() - '30d'::INTERVAL * random() AS "opens_at",
now() + '7d'::INTERVAL * random() AS "closes_at"
 
  FROM generate_series(1, 100) AS "survey"

ON CONFLICT ON CONSTRAINT "surveys_pkey"
DO UPDATE SET  
  "board_id" = EXCLUDED."board_id",
"created_at" = EXCLUDED."created_at",
 "updated_at" = EXCLUDED."updated_at",
"opens_at" = EXCLUDED."opens_at",
"closes_at" = EXCLUDED."closes_at";