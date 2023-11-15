import { Octokit } from '@octokit/rest';

export const getOctokit = () => {
  return new Octokit({
    auth: import.meta.env.VITE_GITHUB_TOKEN,
  });
};
