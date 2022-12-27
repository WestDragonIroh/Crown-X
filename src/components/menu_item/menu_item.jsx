import { useNavigate } from 'react-router-dom';

import './menu_item.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl}) => {
  

  const navigate = useNavigate();
  const redir = () => {
    navigate(`${linkUrl}`)
  }

  return (
  <div
    className={`${size} menu-item`}
    onClick={redir}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)};

export default MenuItem;