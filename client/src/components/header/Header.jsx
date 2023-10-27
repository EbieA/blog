import './header.css'

export default function Header() {
  return (
    <div className='header'>
    <div className="headerTitles">
        <span className='headerTitleSm'></span>
        <span className='headerTitleLg'>The Blog</span>
    </div>
    <img className='headerImg' src="https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?auto=format&fit=crop&q=80&w=2873&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
  )
}
