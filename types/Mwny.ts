export interface Profile {
  greeting: string;
  blurb: string;
  tasks: string[];
}

export interface TechStack {
  angular: TechStackItem;
  rxjs: TechStackItem;
  ngrx: TechStackItem;
  typescript: TechStackItem;
  react: TechStackItem;
  node: TechStackItem;
  flutter: TechStackItem;
}

export interface TechStackItem {
  title: string;
  color: string;
  logo: string;
  techExp: string[];
}