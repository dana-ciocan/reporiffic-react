export interface RepoProps {
  name: string;
}

export const Repo = ({ name }: RepoProps): JSX.Element => {
  return <tr><td>{name}</td><td>Open PRs here</td></tr>;
};
