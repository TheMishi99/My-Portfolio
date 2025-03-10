export type Link = {
  title: string;
  to: string;
};

export type Project = {
  id: number;
  title: string;
  image: string;
  description: string;
  stack: string[];
  repositoryLink: string;
  deployLink: string;
};

export type CustomSelectOption = {
  icon: React.ReactNode;
  title: string;
  value: string;
}