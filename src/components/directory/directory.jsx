import React from 'react';

import './directory.scss';

import MenuItem from '../menu_item/menu_item';
import { useGlobalContext } from '../../state/context';



const Directory = () => {

  const { sections } = useGlobalContext()

  return (
    <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
    </div>
  )
}

export default Directory;