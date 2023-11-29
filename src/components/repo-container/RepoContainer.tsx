import { useOctokitTeamRepos } from '../../hooks/useOctokitTeamRepos';
import styles from './RepoContainer.module.css';

export const RepoContainer = (): JSX.Element => {
  const repos = useOctokitTeamRepos();

  return <div className={styles.repoContainer}>
    {repos.map(repo => <h3 className={styles.repoName}>{repo.name}</h3>)}
  </div>;
};
