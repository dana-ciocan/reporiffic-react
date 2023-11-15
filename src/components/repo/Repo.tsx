export interface RepoProps {
  name: string;
}

export const Repo = ({ name }: RepoProps): JSX.Element => {
  return <div key={name}>{name}</div>;
};
