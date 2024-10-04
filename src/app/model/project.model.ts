import { StagModel } from "./stag.model";

export interface ProjectModel {
    id: string;
    projectName: string;
    role: string;
    tags: StagModel[];
    description: string;
  }