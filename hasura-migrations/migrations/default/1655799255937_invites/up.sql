CREATE TABLE IF NOT EXISTS "public"."invites"(
    survey_id TEXT REFERENCES survey(survey_id),
    user_id TEXT REFERENCES users(user_id)
);
