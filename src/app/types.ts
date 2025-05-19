export interface IProjectDescriptionPart {
  text: string;
  highlight?: boolean;
}

export interface IProject {
  title: string;
  period: string;
  description: IProjectDescriptionPart[];
  imageURL: string;
  projectURL: string;
  skills: string[];
}
