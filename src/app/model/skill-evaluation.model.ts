import { SkillModel } from "./skill.model";

export interface SkillEvaluationModel {
    id: string;
    skill: SkillModel[];
    userId: string;
    yearExperience: string;
    details: string;
    createdAt: Date;
    modifiedAt: Date;
    createBy: string;
    modifiedBy: string;
  }