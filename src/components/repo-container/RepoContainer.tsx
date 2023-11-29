import { useOctokitTeamRepos } from '../../hooks/useOctokitTeamRepos';
import { RepoDetails } from '../repo-details/RepoDetails';
import styles from './RepoContainer.module.css';

export const RepoContainer = (): JSX.Element => {
  const repos = useOctokitTeamRepos();

  return (
    <div className={styles.repoContainer}>
      {repos.map((repo) => (
        <>
          <RepoDetails key={repo.name} repo={repo} />
        </>
      ))}
    </div>
  );
};
