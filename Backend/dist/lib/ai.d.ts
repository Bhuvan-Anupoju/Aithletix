import type { TrainingPlan, UserProfile } from "../../types/index.js";
export declare function generateTrainingPlan(profile: UserProfile | Record<string, any>): Promise<Omit<TrainingPlan, "id" | "userId" | "version" | "createdAt">>;
//# sourceMappingURL=ai.d.ts.map