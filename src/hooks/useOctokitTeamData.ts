import { useState, useEffect } from 'react';
import { getOctokit } from '../utils/get-octokit';
import { Team } from '../types/team';

export const useOctokitTeamData = (): Team => {
  const [team, setTeam] = useState({ name: '' });

  useEffect(() => {
    const onLoad = async () => {
      await getOctokit()
        .request('GET /orgs/{org}/teams/{team_slug}', {
          org: import.meta.env.VITE_GITHUB_OWNER,
          team_slug: import.meta.env.VITE_GITHUB_TEAM,
        })
        .then(({ data }) => {
          setTeam({ name: data?.name || '' });
        })
        .catch((err) => console.log(err));
    };
    onLoad();
  }, []);
  return team;
};
