import React from 'react';
import loader from './loader.gif';

const Spinner = () => {

  return (
    <div className="text-center my-4">
      <img src={loader} alt="Loading" />
    </div>
  )
}

export default Spinner;
