import { useState } from 'react';
import Form from './components/form';
import { useFetch } from './hooks/useFetch';

export default function App({ API_KEY }) {
  const [queryOptions, setQueryOptions] = useState({
    division: 'I',
    tier: 'DIAMOND',
    queue: 'RANKED_SOLO_5x5',
    order: 'ascending',
    stats: 'points',
  });
  const { division, tier, queue, order, stats } = queryOptions;

  const {
    data: players,
    isFetching,
    error,
  } = useFetch(
    `lol/league/v4/entries/${queue}/${tier}/${division}?page=1&api_key=${API_KEY}`,
    queryOptions
  );

  const sortedPlayers = players?.sort((a, b) =>
    order === 'ascending' ? a[stats] - b[stats] : b[stats] - a[stats]
  );

  return (
    <>
      <Form setQueryOptions={setQueryOptions} />
      {error && <h1>{error}</h1>}
      {isFetching && <h1>Loading...</h1>}
      {sortedPlayers?.map(player => (
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
