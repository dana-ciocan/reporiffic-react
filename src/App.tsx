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
  const teamName = (team.name || 'your team');

  return (
    <>
      <UserWelcome name={name} team={teamName} />
      <table>
        <thead>
        <tr>
          <th>Repo name</th><th>Number of open PRs</th>
        </tr>
        </thead>
        <tbody>
          {repos.map(repo => <Repo key={repo.name} name={repo.name} />)}
        </tbody>
      </table>
    </>
  )
}