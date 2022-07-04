CREATE TABLE IF NOT EXISTS "public"."survey"(
    survey_id TEXT PRIMARY KEY,
    board_id TEXT REFERENCES boards(board_id),
	open_since TIMESTAMPTZ DEFAULT NOW(),
	open_until TIMESTAMPTZ DEFAULT NOW()
);
