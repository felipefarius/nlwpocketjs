import { Table } from "drizzle-orm"
import{pgTable, text, integer, timestamp} from "drizzle-orm/pg-core"
import{createId} from "@paralleldrive/cuid2"

export const goals = pgTable("goals",{
    id: text("id").primaryKey().$defaultFn(() => createId()),
    tittle: text ("tittle").notNull(),
    desiredWeeklyFrenquency: integer("desidered_weekle_freguency").notNull(),
    createdAt: timestamp("created_at",{withTimezone: true})
    .notNull()
    .defaultNow(),
})

export const goalCompletions = pgTable('goal_completions',{
    id: text("id").primaryKey(),
    goalId: text("goal_id").references(()=> goals.id).notNull(),
    createdAt: timestamp("created_at", {withTimezone: true})
        .notNull()
        .defaultNow(),
    
})