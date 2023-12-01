export enum State {
  Approved = 'APPROVED',
  ChangesRequested = 'CHANGES_REQUESTED',
  Commented = 'COMMENTED',
}

export interface Review {
  author: string;
  authorAvatar: string;
  submittedDate: string;
  state: State;
}

export interface FullReview {
  user: {
    login: string;
    avatar_url: string;
  };
  submitted_at: string;
  state: State;
}
