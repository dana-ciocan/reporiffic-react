import { useOctokitRepoPulls } from "../../hooks/useOctokitRepoPulls";
import { Pull } from "../../types/pull";
import { Repo } from "../../types/repo";
import { PullContainer } from "../pull-container/PullContainer";
import styles from './RepoDetails.module.css';

export interface RepoDetailsProps {
  repo: Repo;
}

export const RepoDetails = ({ repo }: RepoDetailsProps): JSX.Element | null => {
  const pulls: Pull[] = useOctokitRepoPulls(repo.name);

  return pulls.length > 0 ? <><h3 className={styles.repoName}>{repo.name}</h3><PullContainer pulls={pulls} /></> : null;
};
