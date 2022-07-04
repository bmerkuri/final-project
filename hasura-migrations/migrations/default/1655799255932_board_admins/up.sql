CREATE TABLE IF NOT EXISTS "public"."board_admins"(
      board_id TEXT REFERENCES boards(board_id),
      user_id TEXT REFERENCES users(user_id) 

   
);
