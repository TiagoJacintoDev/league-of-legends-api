export default function Form({ setQueryOptions }) {
  function changeQueryOptions(e) {
    setQueryOptions(lastQueryOptions => ({
      ...lastQueryOptions,
      [e.target.name]: e.target.value,
    }));
  }

  function changeOrder(e) {
    const valueSplit = e.target.value.split('_');
    setQueryOptions(lastQueryOptions => ({
      ...lastQueryOptions,
      order: valueSplit[0],
      stats: valueSplit[1],
    }));
  }

  const selectOptions = [
    {
      name: 'division',
      values: {
        I: 'I',
        II: 'II',
        III: 'III',
        IV: 'IV',
      },
    },
    {
      name: 'tier',
      values: {
        DIAMOND: 'Diamond',
        PLATINUM: 'Platinum',
        GOLD: 'Gold',
        SILVER: 'Silver',
        BRONZE: 'Bronze',
        IRON: 'Iron',
      },
    },
    {
      name: 'queue',
      values: {
        RANKED_SOLO_5x5: 'Ranked Solo',
        RANKED_FLEX_SR: 'Ranked Flex',
      },
    },
    {
      name: 'order',
      values: {
        ascending_leaguePoints: 'Ascending Points',
        descending_leaguePoints: 'Descending Points',
        ascending_wins: 'Ascending Wins',
        descending_wins: 'Descending Wins',
        ascending_losses: 'Ascending Losses',
        descending_losses: 'Descending Losses',
      },
    },
  ];

  return (
    <form>
      {selectOptions.map(select => (
        <select
          name={select.name}
          onChange={select.name === 'order' ? changeOrder : changeQueryOptions}
        >
          {Object.entries(select.values).map(value => (
            <option value={value[0]}>{value[1]}</option>
          ))}
        </select>
      ))}
    </form>
  );
}
