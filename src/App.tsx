import './App.css'
import { Repo } from './components/repo/Repo';
import { UserWelcome } from './components/user-welcome/UserWelcome';
import { useOctokitTeamData } from './hooks/useOctokitTeamData';
import { useOctokitTeamRepos } from './hooks/useOctokitTeamRepos';
import { useOctokitUserData } from './hooks/useOctokitUserData';


export const App = () => {
  const user = useOctokitUserData();
  const team = useOctokitTeamData();
  const repos = useOctokitTeamRepos();

  const name = (user.name || user.login || 'there').split(' ')?.[0];

  return (
    <>
      <UserWelcome name={name} team={team.name} />
      <p>These are the repos {team.name} manages:</p>
      {repos.map(repo => <Repo name={repo.name} />)}
    </>
  )
}