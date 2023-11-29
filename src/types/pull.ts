export interface Label {
  name: string;
  color: string;
}

// Pull request data we're interested in
export interface Pull {
  url: string;
  title: string;
  author: string;
  authorAvatar: string;
  number: number;
  labels: Label[];
}

// Pull request data received from Github
export interface FullPull {
  html_url: string;
  number: number;
  state: string;
  title: string;
  user: {
    login: string;
    avatar_url: string;
  };
  labels: Label[];
  draft: boolean;
}
