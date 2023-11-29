import { useOctokitRepoPulls } from '../../hooks/useOctokitRepoPulls';
import { Pull } from '../../types/pull';
import { Repo } from '../../types/repo';
import { PullContainer } from '../pull-container/PullContainer';
import styles from './RepoDetails.module.css';

export interface RepoDetailsProps {
  repo: Repo;
}

export const RepoDetails = ({ repo }: RepoDetailsProps): JSX.Element | null => {
  const pulls: Pull[] = useOctokitRepoPulls(repo.name);
  const starredRepos = import.meta.env.VITE_STARRED_REPOS.split(',');

  return pulls.length > 0 ? (
    <>
      <h3 className={styles.repoName}>
        {starredRepos.includes(repo.name) && '⭐️'} {repo.name}
      </h3>
      <PullContainer repoName={repo.name} pulls={pulls} />
    </>
  ) : null;
};
