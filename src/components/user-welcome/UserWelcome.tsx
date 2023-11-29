import styles from './UserWelcome.module.css';

export interface UserWelcomeProps {
  name: string;
  team: string;
}

export const UserWelcome = ({ name }: UserWelcomeProps): JSX.Element => {
  return (
    <div className={styles.banner}>
      <h1>Hi {name} 👋</h1>
      <h2>Welcome to <code>Reporiffic</code>!</h2>
    </div>
  );
};
