import './header.css'

export default function Header() {
  return (
    <div className='header'>
    <div className="headerTitles">
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
    </div>
    <img className='headerImg' src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
    </div>
  )
}
