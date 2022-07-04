CREATE TABLE IF NOT EXISTS "public"."questions"(
    "question_id" TEXT PRIMARY KEY,
    board_id TEXT REFERENCES boards(board_id),
    "type" TEXT ,
    "data" JSONB,
    "etag" TEXT,
    "is_deleted" BOOLEAN
   
);
