import { useOctokitRepoPulls } from '../../hooks/useOctokitRepoPulls';
import { Pull } from '../../types/pull';
import styles from './PullContainer.module.css';

export interface PullContainerProps {
  repoName: string;
}  

export const PullContainer = ({ repoName }: PullContainerProps): JSX.Element => {
  const pulls: Pull[] = useOctokitRepoPulls(repoName);

  return <div className={styles.pullContainer}>
    {pulls.map(pull => <div><a href={pull.url} target="_blank">{pull.title}</a> by {pull.author} <img className={styles.avatar} src={pull.authorAvatar} /></div>)}
  </div>;
};
