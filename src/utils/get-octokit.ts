import { Octokit } from '@octokit/rest';

let octokit: Octokit;

export const getOctokit = () => {
  if (!octokit) {
    octokit = new Octokit({
      auth: import.meta.env.VITE_GITHUB_TOKEN,
    });
  }
  return octokit;
};
