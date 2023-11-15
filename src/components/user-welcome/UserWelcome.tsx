export interface UserWelcomeProps {
  name: string;
}

export const UserWelcome = ({ name }: UserWelcomeProps): JSX.Element => {
  return (
    <>
      <h1>Hi {name}! 👋</h1>
      <h2>Welcome to reporiffic</h2>
    </>
  );
};
