import { Link } from 'react-router-dom';
import './topbar.css'

export default function Topbar() {
  const user = false;
  return (
    <div className='top'>
        <div className='topLeft'>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-square-x-twitter"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        </div>
        <div className='topCenter'>
            <ul className="topList">
            
                <li className='topListItem'><Link className='link' to='/'>HOME</Link></li>
                <li className='topListItem'><Link className='link' to='/about'>ABOUT</Link></li>
                <li className='topListItem'><Link className='link' to='/cuntact'>CONTACT</Link></li>
                <li className='topListItem'><Link className='link' to='/write'>WRITE</Link></li>
                <li className='topListItem'>{user && "LOGOUT"}</li>
            </ul>
        </div>
        <div className='topRight'>
        {
          user ? (
            <img
            className='topImg'
             src="data:image/jpeg;base64,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" 
            alt="" />
          ) : (
            <ul className='topList'>
            <li className='topListItem'><Link className='link' to='/login'>LOGIN</Link></li>
            <li className='topListItem'><Link className='link' to='/register'>REGISTER</Link></li>
            </ul>
          )
        }
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
