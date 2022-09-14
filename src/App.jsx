import { useEffect, useState } from 'react';
import Form from './components/form';
import { useFetch } from './hooks/useFetch';

function App() {
  const [queryOptions, setQueryOptions] = useState({
    division: 'I',
    tier: 'DIAMOND',
    queue: 'RANKED_SOLO_5x5',
    order: 'ascending_points',
  });

  const { division, tier, queue, order } = queryOptions;

  const {
    data: players,
    isFetching,
    error,
  } = useFetch(
    `lol/league/v4/entries/${queue}/${tier}/${division}?page=1&api_key=RGAPI-c7de2433-a44f-4297-97e7-def4301180e3`,
    queryOptions
  );

  const selectedValue = order.split('_');
  const selectedOrder = selectedValue[0];
  const selectedKey = selectedValue[1];

  const sortedPlayers =
    selectedOrder === 'ascending'
      ? players?.sort((a, b) => a[selectedKey] - b[selectedKey])
      : players?.sort((a, b) => b[selectedKey] - a[selectedKey]);

  return (
    <>
      <Form setQueryOptions={setQueryOptions} />
      {error && <h1>{error}</h1>}
      {isFetching && <h1>Loading...</h1>}
      {sortedPlayers?.map(player => (
        <>
          <p>Player Name: {player?.summonerName}</p>
          <p>
            Tier: {player?.tier} {player?.rank}
          </p>
          <p>Points: {player?.leaguePoints}</p>
          <p>Wins: {player?.wins}</p>
          <p>Losses: {player?.losses}</p>
          <br />
        </>
      ))}
    </>
  );
}

export default App;
