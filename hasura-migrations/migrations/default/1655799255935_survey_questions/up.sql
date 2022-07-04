CREATE TABLE IF NOT EXISTS "public"."survey_questions"(
    survey_id TEXT REFERENCES survey(survey_id),
    question_id TEXT REFERENCES questions(question_id),
    "type" TEXT,
    "data" JSONB,
    "etag" TEXT
);
