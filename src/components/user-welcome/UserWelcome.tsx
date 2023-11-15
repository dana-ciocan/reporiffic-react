export interface UserWelcomeProps {
  name: string;
  team: string;
}

export const UserWelcome = ({ name, team }: UserWelcomeProps): JSX.Element => {
  return (
    <>
      <h1>Hi {name}! 👋</h1>
      <h2>Welcome to reporiffic for {team}</h2>
    </>
  );
};
