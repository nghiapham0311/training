import { ProjectModel } from "./project.model";
import { SkillEvaluationModel } from "./skill-evaluation.model";

export class UserModel {
    id: string = '';
    userId: string = '';
    title: string = '';
    department: string = '';
    experienceYear: number = 0;
    createDate!: Date;
    modifiedDate!: Date;
    createByUser: string = '';
    modifiedByUser: string = '';
    skills: Array<SkillEvaluationModel> = [];
    skillHighlight: Array<SkillEvaluationModel> = [];
    projects: Array<ProjectModel> = [];
}