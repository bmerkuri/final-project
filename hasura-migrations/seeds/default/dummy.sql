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


INSERT INTO "public"."questions" ("id","board_id","data","type")
VALUES(1,1,'{"question":"What is level of knowledge of CSS"}','question1');

INSERT INTO "public"."questions" ("id","board_id","data","type")
VALUES(2,2,'{"question":"Which programming language is the best for web development?"}','question2');

INSERT INTO "public"."questions" ("id","board_id","data","type")
VALUES(3,3,'{"question":"Which back end framework is the best for web development?"}','question3');

INSERT INTO "public"."questions" ("id","board_id","data","type")
VALUES(4,4,'{"question":"Most powerful programming language?"}','question4');

INSERT INTO "public"."questions" ("id","board_id","data","type")
VALUES(5,5,'{"question":"Most used programming language?"}','question5');

INSERT INTO "public"."questions" ("id","board_id","data","type")
VALUES(6,6,'{"question":"Javascript is a :"}','question6');

INSERT INTO "public"."questions" ("id","board_id","data","type")
VALUES(7,7,'{"question":"Html is a :"}','question7');

INSERT INTO "public"."questions" ("id","board_id","data","type")
VALUES(8,8,'{"question":"On Rails"}','question8');

INSERT INTO "public"."questions" ("id","board_id","data","type")
VALUES(9,9,'{"question":"Dart is a langauge developed by"}','question9');



INSERT INTO "public"."answers"("id","board_id","user_id","question_id","score","data")
VALUES(1,1,1,1,10,'{"opsion1":"30%","opsion2":"60%","opsion3":"90%"}');

INSERT INTO "public"."answers"("id","board_id","user_id","question_id","score","data")
VALUES(2,2,2,2,10,'{"opsion1":"Javascript","opsion2":"Php","opsion3":"C#"}');

INSERT INTO "public"."answers"("id","board_id","user_id","question_id","score","data")
VALUES(3,3,3,3,10,'{"opsion1":"NodeJs","opsion2":"Laravel","opsion3":"Django"}');

INSERT INTO "public"."answers"("id","board_id","user_id","question_id","score","data")
VALUES(4,4,4,4,10,'{"opsion1":"Python","opsion2":"Ruby","opsion3":"Javascript"}');

INSERT INTO "public"."answers"("id","board_id","user_id","question_id","score","data")
VALUES(5,5,5,5,10,'{"opsion1":"Java","opsion2":"Go","opsion3":"C"}');

INSERT INTO "public"."answers"("id","board_id","user_id","question_id","score","data")
VALUES(6,6,6,6,10,'{"opsion1":"Programming Language","opsion2":"Framework","opsion3":"Tool"}');

INSERT INTO "public"."answers"("id","board_id","user_id","question_id","score","data")
VALUES(7,7,7,7,10,'{"opsion1":"Smthng Else","opsion2":"Hypertext Markup Language","opsion3":"Backend`"}');

INSERT INTO "public"."answers"("id","board_id","user_id","question_id","score","data")
VALUES(8,8,8,8,10,'{"opsion1":"Google","opsion2":"Microsoft","opsion3":"By me"}');

INSERT INTO "public"."answers"("id","board_id","user_id","question_id","score","data")
VALUES(9,9,9,9,10,'{"opsion1":"Web development","opsion2":"Mobile development","opsion3":"Desktop Development"}');


