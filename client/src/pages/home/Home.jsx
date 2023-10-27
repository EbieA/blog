import axios from 'axios'

import { useState, useEffect } from 'react'
import Posts from '../../components/posts/Posts'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/posts")
      setPosts(res.data);
      console.log(res);
    }

    fetchPosts();
  }, [])
  
  return (
    <> 
        <Header />
    <div className='home'>
        <Posts posts={posts}/>
        <Sidebar/>
    </div>
    </>
  )
}
