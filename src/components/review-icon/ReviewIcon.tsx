import { State } from '../../types/review';
import styles from './ReviewIcon.module.css';

export interface ReviewIconProps {
  author: string;
  state: string;
}

export const ReviewIcon = ({ author, state }: ReviewIconProps): JSX.Element => {
  if (state === State.Approved) {
    return (
      <span className={styles.approved} title={`One approval by ${author}`}>
        ✅
      </span>
    );
  }
  if (state === State.Commented) {
    return (
      <span className={styles.commented} title={`One comment by ${author}`}>
        💬
      </span>
    );
  }
  if (state === State.ChangesRequested) {
    return (
      <span
        className={styles.changesRequested}
        title={`Changes requested by ${author}`}
      >
        🛑
      </span>
    );
  }
  return <></>;
};
