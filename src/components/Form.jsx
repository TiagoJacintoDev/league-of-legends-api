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

  return (
    <form>
      <select name='division' onChange={changeQueryOptions}>
        <option value='I'>I</option>
        <option value='II'>II</option>
        <option value='III'>III</option>
        <option value='IV'>IV</option>
      </select>
      <select name='tier' onChange={changeQueryOptions}>
        <option value='DIAMOND'>Diamond</option>
        <option value='PLATINUM'>Platinum</option>
        <option value='GOLD'>Gold</option>
        <option value='SILVER'>Silver</option>
        <option value='BRONZE'>Bronze</option>
        <option value='IRON'>Iron</option>
      </select>
      <select name='queue' onChange={changeQueryOptions}>
        <option value='RANKED_SOLO_5x5'>Ranked Solo</option>
        <option value='RANKED_FLEX_SR'>Ranked Flex</option>
      </select>
      <select name='order' onChange={changeOrder}>
        <option value='ascending_leaguePoints'>Ascending Points</option>
        <option value='descending_leaguePoints'>Descending Points</option>
        <option value='ascending_wins'>Ascending Wins</option>
        <option value='descending_wins'>Descending Wins</option>
        <option value='ascending_losses'>Ascending Losses</option>
        <option value='descending_losses'>Descending Losses</option>
      </select>
    </form>
  );
}
