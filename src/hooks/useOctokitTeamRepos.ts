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
          const starredRepos = import.meta.env.VITE_STARRED_REPOS.split(',');
          const repoData = data
            .map((repo) => ({ name: repo?.name, url: repo?.html_url }))
            .sort((a, b) => {
              if (
                starredRepos.includes(a.name) &&
                !starredRepos.includes(b.name)
              ) {
                return -1;
              }
              if (
                !starredRepos.includes(a.name) &&
                starredRepos.includes(b.name)
              ) {
                return 1;
              }
              return 0;
            });

          setRepos(repoData);
        })
        .catch((err) => console.log(err));
    };
    onLoad();
  }, []);
  return repos;
};
