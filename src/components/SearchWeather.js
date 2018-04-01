import React from 'react';

const SearchWeather = ({onInputChange ,onButtonSubmit}) => {

  return (
    <div className='pa2' >
      <input type="search" className='pa3 ba b--green bg-lghtest-blue shadow-5' placeholder='ZipCode' onChange={onInputChange} />
      <button type="button" className='pa3 ba dim bg-lghtest-blue shadow-5' onClick={onButtonSubmit} >Search</button>
    </div>
  );
}
export default SearchWeather;