import { useState, useEffect } from 'react';
import { getOctokit } from '../utils/get-octokit';
import { User } from '../types/user';

export const useOctokitUserData = (): User => {
  const [user, setUser] = useState({ login: '', name: '' });

  useEffect(() => {
    const onLoad = async () => {
      await getOctokit()
        .request('GET /user', {
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
          },
        })
        .then(({ data }) => {
          setUser({ login: data?.login, name: data?.name || '' });
        })
        .catch((err) => console.log(err));
    };
    onLoad();
  }, []);
  return user;
};
