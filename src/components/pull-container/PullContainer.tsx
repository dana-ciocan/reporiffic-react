import { Pull } from '../../types/pull';
import styles from './PullContainer.module.css';

export interface PullContainerProps {
  pulls: Pull[];
}  

export const PullContainer = ({ pulls }: PullContainerProps): JSX.Element => {
  return <div className={styles.pullContainer}>
    {pulls.map(pull => <div><a href={pull.url} target="_blank">{pull.title}</a> by {pull.author} <img className={styles.avatar} src={pull.authorAvatar} /></div>)}
  </div>;
};
