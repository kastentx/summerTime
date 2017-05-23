import React from 'react';

const DataGrid = (props) => {
  const compStats = props.userData.competitive.game_stats;
  const avgCompStats = props.userData.competitive.average_stats;
  const tableStyles = {
    color: '#0bff00',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '10px',
    borderSpacing: '.5rem'
  }

  return (
    <div>
      <table
        style={tableStyles}>
        <tbody>
          <tr>
            <td><h4>HIGHEST DMG:</h4></td>
            <td><h4>{JSON.stringify(compStats.damage_done_most_in_game.toLocaleString()).replace(/"/g, '')}</h4></td>
          </tr>
          <tr>
            <td><h4>AVERAGE DMG:</h4></td><td><h4>{JSON.stringify(avgCompStats.damage_done_avg.toLocaleString()).replace(/"/g, '')}</h4></td>
          </tr>
          <tr>
            <td><h4>HIGHEST HEALS:</h4></td><td><h4>{JSON.stringify(compStats.healing_done_most_in_game.toLocaleString()).replace(/"/g, '')}</h4></td>
          </tr>
          <tr>
            <td><h4>AVERAGE HEALS:</h4></td><td><h4>{JSON.stringify(avgCompStats.healing_done_avg.toLocaleString()).replace(/"/g, '')}</h4></td>
          </tr>
          <tr>
            <td><h4>MOST ELIMS:</h4></td><td><h4>{JSON.stringify(compStats.eliminations_most_in_game.toLocaleString()).replace(/"/g, '')}</h4></td>
          </tr>
          <tr>
            <td><h4>AVERAGE ELIMS:</h4></td><td><h4>{JSON.stringify(avgCompStats.eliminations_avg.toLocaleString()).replace(/"/g, '')}</h4></td>
          </tr>
          <tr>
            <td><h4>K/D RATIO:</h4></td><td><h4>{JSON.stringify(compStats.kpd.toLocaleString()).replace(/"/g, '')}</h4></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DataGrid;
