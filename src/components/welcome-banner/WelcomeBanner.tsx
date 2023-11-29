import styles from './WelcomeBanner.module.css';

export interface WelcomeBannerProps {
  name: string;
  team: string;
}

export const WelcomeBanner = ({ name }: WelcomeBannerProps): JSX.Element => {
  return (
    <div className={styles.banner}>
      <h1>Hi {name} 👋</h1>
      <h2>Welcome to <code>Reporiffic</code>!</h2>
    </div>
  );
};
