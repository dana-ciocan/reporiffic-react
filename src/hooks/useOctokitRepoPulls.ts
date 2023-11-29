import { useState, useEffect } from 'react';
import { getOctokit } from '../utils/get-octokit';
import { Pull, FullPull, Label } from '../types/pull';

export const useOctokitRepoPulls = (name: string): Pull[] => {
  const [pulls, setPulls] = useState<Pull[]>([]);

  useEffect(() => {
    const onLoad = async () => {
      await getOctokit()
        .request('GET /repos/{org}/{repo}/pulls', {
          org: import.meta.env.VITE_GITHUB_OWNER,
          repo: name,
        })
        .then(({ data }) => {
          const pullData = data
            .filter((pull: FullPull) => !pull.draft)
            .map((pull: FullPull) => ({
              url: pull?.html_url,
              title: pull?.title,
              author: pull?.user?.login,
              authorAvatar: pull?.user?.avatar_url,
              number: pull?.number,
              labels: pull?.labels.map((label: Label) => ({
                name: label?.name,
                color: label?.color,
              })),
            }));
          setPulls(pullData);
        })
        .catch((err) => console.log(err));
    };
    if (name !== '') {
      onLoad();
    }
  }, [name]);
  return pulls;
};
