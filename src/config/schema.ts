import { json, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const StoryData = pgTable("storyData", {
  id: text("id").primaryKey(),
  storySubject: text("storySubject").notNull(),
  storyType: varchar("storyType").notNull(),
  ageGroup: varchar("ageGroup"),
  storyContent: json("storyConten"),
});
