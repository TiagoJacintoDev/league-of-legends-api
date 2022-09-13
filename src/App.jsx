import { useFetch } from './hooks/useFetch';

function App() {
  const {
    data: players,
    isFetching,
    error,
  } = useFetch(
    'lol/league/v4/entries/RANKED_SOLO_5x5/DIAMOND/I?page=1&api_key=RGAPI-c7de2433-a44f-4297-97e7-def4301180e3'
  );
  return (
    <>
      {error && <h1>{error}</h1>}
      {isFetching && <h1>Loading...</h1>}
      {players?.map(player => (
        <>
          <p>Player Name: {player.summonerName}</p>
          <p>
            Tier: {player.tier} {player.rank}
          </p>
          <p>Points: {player.leaguePoints}</p>
          <p>Wins: {player.wins}</p>
          <p>Losses: {player.losses}</p>
          <br />
        </>
      ))}
    </>
  );
}

export default App;
