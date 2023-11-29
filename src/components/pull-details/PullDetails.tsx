import { Pull } from '../../types/pull';
import styles from './PullDetails.module.css';

export interface PullDetailsProps {
  repoName: string;
  pull: Pull;
}

export const PullDetails = ({ pull }: PullDetailsProps): JSX.Element | null => {
  return (
    <div className={styles.pullDetails}>
      {pull.labels.map((label) => (
        <span
          style={{ backgroundColor: `#${label.color}` }}
          className={styles.label}
        >
          {label.name}
        </span>
      ))}
      <div>
        <a href={pull.url} target='_blank'>
          {pull.title}
        </a>{' '}
        by {pull.author}
      </div>
      <img className={styles.avatar} src={pull.authorAvatar} />
    </div>
  );
};
