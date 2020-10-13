export interface Profile {
  greeting: string;
  blurb: string;
  tasks: string[];
}

export interface TechStack {
  typescript: TechStackItem;
  angular: TechStackItem;
  rxjs: TechStackItem;
  ngrx: TechStackItem;
  react: TechStackItem;
  flutter: TechStackItem;
  node: TechStackItem;
  python: TechStackItem;
}

export interface TechStackItem {
  title: string;
  color: string;
  logo: string;
  techExp: string[];
}
