import { useState, useEffect } from 'react';
import { getOctokit } from '../utils/get-octokit';
import { Repo } from '../types/repo';

export const useOctokitTeamRepos = (): Repo[] => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const onLoad = async () => {
      await getOctokit()
        .request('GET /orgs/{org}/teams/{team_slug}/repos', {
            org: import.meta.env.VITE_GITHUB_OWNER,
            team_slug: import.meta.env.VITE_GITHUB_TEAM,
          })
        .then(({ data }) => {
          console.log(data);
          const repoData = data.map(repo => ({ name: repo?.name }))
          setRepos(repoData)
        })
        .catch((err) => console.log(err));
    };
    onLoad();
  }, []);
  return repos;
};
