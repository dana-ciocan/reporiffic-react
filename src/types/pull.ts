// Pull request data we're interested in
export interface Pull {
  url: string;
  title: string;
  author: string;
  authorAvatar: string;
}

// Pull request data received from Github
export interface FullPull {
  url: string;
  id: number;
  node_ide: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
  issue_url: string;
  commits_url: string;
  review_comments_url: string;
  comments_url: string;
  statuses_url: string;
  number: number;
  state: string;
  locked: boolean;
  title: string;
  user: {
    login: string;
    avatar_url: string;
  };
  body: string;
  draft: boolean;
}