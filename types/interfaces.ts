export interface INavLink {
  title: string;
  url: string;
  variant: "contained" | "outlined";
}

export interface ISemiSection {
  title: string;
  content: string[];
  navLink?: string;
  navLinkUrl?: string;
  imageUrl: string;
  metadata: {
    backgroundColor: string;
  };
}

export interface IServiceSection {
  title: string;
  subTitle: string;
  points: { iconUrl: string; text: string }[];
  urlWorks: string;
  urlService: string;
  urlMethod: string;
  image: string;
  metadata: {
    backgroundColor: string;
  };
}

export interface IServiceCard {
  title: string;
  description: string;
  imageUrl: string;
}

export interface IWorkCard {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  url: string;
}
