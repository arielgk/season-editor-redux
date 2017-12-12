import React from 'react';
import PropTypes from 'prop-types';
import SeasonRow from './SeasonRow';

const SeasonList =({seasons,episodes})=>{
  return(
    <div>
      <h2>Seasons:</h2>
      {seasons.map(season=>
        <SeasonRow key={season.id} {...season } episodes={episodes}/>
        )}
      <hr />
    </div>
  );
}


SeasonList.propTypes ={
  items:PropTypes.array.isRequired,
  episodes:PropTypes.array.isRequired
}




export default SeasonList;