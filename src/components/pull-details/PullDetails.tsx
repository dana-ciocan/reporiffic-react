import { useOctokitPullReviews } from '../../hooks/useOctokitPullReviews';
import { Pull } from '../../types/pull';
import { Review, State } from '../../types/review';
import styles from './PullDetails.module.css';

export interface PullDetailsProps {
  repoName: string;
  pull: Pull;
}

export const PullDetails = ({
  repoName,
  pull,
}: PullDetailsProps): JSX.Element | null => {
  const reviews: Review[] = useOctokitPullReviews(repoName, pull.number);
  const pullApproved =
    reviews.filter((review: Review) => review.state === State.Approved)
      .length >= import.meta.env.VITE_REQUIRED_REVIEWS;

  let pullStyles = `${styles.pullDetails}`;
  if (pullApproved) {
    pullStyles += ` ${styles.pullApproved}`;
  }

  return (
    <div className={pullStyles} key={`${repoName}:${pull.number}`}>
      {pullApproved}
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
      {reviews.map((review) => {
        if (review.state === State.Approved) {
          return '✅ ';
        }
        if (review.state === State.Commented) {
          return '💬 ';
        }
        if (review.state === State.ChangesRequested) {
          return '🛑 ';
        }
      })}
    </div>
  );
};
