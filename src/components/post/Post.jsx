import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <img className="postImg" src="https://images.pexels.com/photos/16059681/pexels-photo-16059681/free-photo-of-clouds-over-mountains.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet</span>
            <hr />
            <span className='postDate'>1 hour ago</span>
        </div>
        <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, iste. Accusantium praesentium numquam odio porro modi. Recusandae incidunt animi delectus beatae aliquid odio est quam, vero, adipisci, labore ducimus iste?
        Tenetur et quod recusandae explicabo quia. Accusamus molestiae, deleniti sapiente odio ullam ut dolorem architecto atque impedit mollitia similique dolores nihil. Laudantium nam, aliquam maxime voluptatem similique voluptas neque nobis.</p>
    </div>
  )
}
