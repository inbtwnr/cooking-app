import React from 'react';

const Chip = ({name}) => (
    <button className='px-2 select-none py-1 bg-gray-100 border border-gray-200 rounded-lg'>{name}</button>
);

export default Chip;