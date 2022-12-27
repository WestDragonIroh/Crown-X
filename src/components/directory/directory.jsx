import React from 'react';

import MenuItem from '../menu_item/menu_item';
import sections from './section';

import './directory.scss';

const Directory = () => {
  return (
    <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
    </div>
  )
}

export default Directory;