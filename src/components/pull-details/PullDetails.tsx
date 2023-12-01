import { useOctokitPullReviews } from '../../hooks/useOctokitPullReviews';
import { Pull } from '../../types/pull';
import { Review, State } from '../../types/review';
import { ReviewIcon } from '../review-icon/ReviewIcon';
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

  return (
    <details key={`${repoName}:${pull.number}`} className={styles.pullDetails}>
      <summary className={pullApproved ? styles.pullApproved : ''}>
        {pull.labels.map((label) => (
          <span
            style={{ backgroundColor: `#${label.color}` }}
            className={styles.label}
          >
            {label.name}
          </span>
        ))}
        <span>
          <a href={pull.url} target='_blank'>
            {pull.title}
          </a>{' '}
          by {pull.author}
        </span>
        <img className={styles.avatar} src={pull.authorAvatar} />
        {reviews.map((review) => (
          <ReviewIcon author={review.author} state={review.state} />
        ))}
      </summary>
      <div className={styles.expansion}>
        {reviews.length === 0 && 'No reviews yet'}
        {reviews.map((review) => {
          return (
            <div className={styles.reviewStep}>
              <ReviewIcon author={review.author} state={review.state} />{' '}
              {review.body && <span>&quot;{review.body}&quot;</span>} from{' '}
              {review.author}
              <img className={styles.avatar} src={review.authorAvatar} />
            </div>
          );
        })}
      </div>
    </details>
  );
};
