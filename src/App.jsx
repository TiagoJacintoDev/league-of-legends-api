import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      'https://euw1.api.riotgames.com/lol/league/v4/entries/RANKED_SOLO_5x5/DIAMOND/I?page=1&api_key=RGAPI-c7de2433-a44f-4297-97e7-def4301180e3'
    )
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  console.log(data);

  return (
    <>
      {data.map(player => (
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
