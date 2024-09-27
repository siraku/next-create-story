import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: "./src/config/schema.ts",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://ai-kids-story_owner:pP9WOZCoIn3d@ep-twilight-hall-a1y1uxar.ap-southeast-1.aws.neon.tech/ai-kids-story?sslmode=require",
  },
  verbose: true,
  strict: true,
})