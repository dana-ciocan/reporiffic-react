export interface Review {
  author: string;
  authorAvatar: string;
  submittedDate: string;
}

export interface FullReview {
  user: {
    login: string;
    avatar_url: string;
  };
  submitted_at: string;
}
