import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: "./src/config/schema.ts",
  dialect: 'postgresql',
  dbCredentials: {
    url: "",
  },
  verbose: true,
  strict: true,
})
