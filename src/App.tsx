import './App.css'
import { RepoContainer } from './components/repo-container/RepoContainer';
import { WelcomeBanner } from './components/welcome-banner/WelcomeBanner';
import { useOctokitTeamData } from './hooks/useOctokitTeamData';
import { useOctokitUserData } from './hooks/useOctokitUserData';


export const App = () => {
  const user = useOctokitUserData();
  const team = useOctokitTeamData();

  const name = (user.name || user.login || 'there').split(' ')?.[0];
  const teamName = (team.name || 'your team');

  return (
    <>
      <WelcomeBanner name={name} team={teamName} />
      <RepoContainer />
    </>
  )
}