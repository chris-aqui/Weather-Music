import React from 'react';

const SearchWeather = ({onInputChange ,onButtonSubmit}) => {

  return (
    <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
      <div className='pa2' >
        <input
        type="search"mw5 center
        className='pa3 ba b--green bg-lghtest-blue shadow-5'
        placeholder='ZipCode'
        onChange={onInputChange}
        onKeyPress={onInputChange}
        />
        <p className='f4 '>OR</p>
        <button
        type="button"
        className='pa3 ba dim bg-lghtest-blue shadow-5 pointer'
        onClick={onButtonSubmit} >Get my location</button>
      </div>
    </article>
  );
}
export default SearchWeather;