export interface IProjectDescriptionPart {
  text: string;
  highlight?: boolean;
}

export type BaseTypographyColors =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'purple'
  | 'blue'
  | 'green'
  | 'yellow';

export type IconRegistry =
  | 'angular'
  | 'csharp'
  | 'git'
  | 'go'
  | 'java'
  | 'javascript'
  | 'react'
  | 'typescript'
  | 'html'
  | 'unity'
  | 'github'
  | 'linkedIn'
  | 'codeIcon'
  | 'groupIcon'
  | 'maintenanceIcon'
  | 'serverIcon';
export interface IProject {
  title: string;
  period: string;
  description: IProjectDescriptionPart[];
  imageURL: string;
  projectURL: string;
  skills: string[];
}

export interface IServices {
  title: string;
  description: string;
  iconRef: IconRegistry;
  color: BaseTypographyColors;
  iconColor: string;
}

export interface EducationItem {
  title: string;
  schoolName: string;
  timePeriod: string;
  cityAndCountry: string;
  competencies: string[];
}
