CREATE TABLE IF NOT EXISTS "public"."answers"(
    "answer_id" TEXT PRIMARY KEY,
    user_id TEXT REFERENCES users(user_id),
    survey_id TEXT REFERENCES survey(survey_id),
    question_id TEXT REFERENCES questions(question_id),
    "created_at" TIMESTAMPTZ DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ DEFAULT NOW(),
    "score" INT check (score between 0 and 100),
    "notes" TEXT
);
