// Pull request data we're interested in
export interface Pull {
  url: string;
  title: string;
  author: string;
  authorAvatar: string;
  number: number;
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
  draft: boolean;
}
