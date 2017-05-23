import React from 'react'

const DataGrid = (props) => {
  const compStats = props.userData.competitive.game_stats;
  const avgCompStats = props.userData.competitive.average_stats;
  return (
    <div>
      <ul style={{listStyleType: 'none', margin: '0', padding: '0', color: '#0bff00'}}>
        <li>
          <h4>HIGHEST DMG: {JSON.stringify(compStats.damage_done_most_in_game)}</h4>
        </li>
        <li>
          <h4>AVERAGE DMG: {JSON.stringify(avgCompStats.damage_done_avg)}</h4>
        </li>
        <li>
          <h4>HIGHEST HEALS: {JSON.stringify(compStats.healing_done_most_in_game)}</h4>
        </li>
        <li>
          <h4>AVERAGE HEALS: {JSON.stringify(avgCompStats.healing_done_avg)}</h4>
        </li>
        <li>
          <h4>MOST ELIMS: {JSON.stringify(compStats.eliminations_most_in_game)}</h4>
        </li>
        <li>
          <h4>AVERAGE ELIMS: {JSON.stringify(avgCompStats.eliminations_avg)}</h4>
        </li>
        <li>
          <h4>K/D RATIO: {JSON.stringify(compStats.kpd)}</h4>
        </li>
      </ul>
    </div>
  )
}

export default DataGrid;
