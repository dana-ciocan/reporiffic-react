import { Pull } from '../../types/pull';
import { PullDetails } from '../pull-details/PullDetails';
import styles from './PullContainer.module.css';

export interface PullContainerProps {
  repoName: string;
  pulls: Pull[];
}

export const PullContainer = ({
  repoName,
  pulls,
}: PullContainerProps): JSX.Element => {
  return (
    <div className={styles.pullContainer}>
      {pulls.map((pull) => (
        <PullDetails
          key={`${repoName}-${pull.number}`}
          repoName={repoName}
          pull={pull}
        />
      ))}
    </div>
  );
};
