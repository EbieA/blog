import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img 
            src="https://images.pexels.com/photos/12679998/pexels-photo-12679998.jpeg?auto=compress&cs=tinysrgb&w=300" 
            alt="" />
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quia, atque inventore a excepturi molestias, ab sapiente expedita quos reprehenderit ipsam natus aliquam.Dolor quis eaque natus?
        </p>
      </div>
      <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Movies</li>
            <li className="sidebarListItem">Sport</li>
          </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-instagram"></i>
        <i className="sidebarIcon fa-brands fa-square-x-twitter"></i>
        <i className="sidebarIcon fa-brands fa-pinterest"></i>
        </div>
      </div>
    </div>
  )
}
