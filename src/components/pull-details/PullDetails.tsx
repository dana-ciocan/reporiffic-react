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

  let pullStyles = '';
  if (pullApproved) {
    pullStyles += ` ${styles.pullApproved}`;
  }

  return (
    <details key={`${repoName}:${pull.number}`}>
      <summary className={pullStyles}>
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
        {reviews.map((review) => {
          return (
            <div className={styles.reviewStep}>
              <ReviewIcon author={review.author} state={review.state} />{' '}
              {review.author}
            </div>
          );
        })}
      </div>
    </details>
  );
};
