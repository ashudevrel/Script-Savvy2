import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

  const posts = [
      {
         id: 1,
        title: " VentureBeat",
        desc: "VentureBeat is one of the leading tech blogs for transformative tech events and news. It reports breaking news on comprehensive content about prime tech businesses along with incisive coverage of the gaming industry. The blog comprises a series of tech-related articles, newsletters, general news, and businesses.",
        img: "https://blog.bit.ai/wp-content/uploads/2020/09/screenshot-venturebeat.com-2020.09.08-10_52_46.jpg",
      },
      {
       id: 2,
       title: "Recode",
       desc: "Currently, owned by VOX media, Recode gives the most updated independent technology news, analysis trends, and reviews from the most respected and informed journalists as well as bloggers in media and technology.",
         img: "https://blog.bit.ai/wp-content/uploads/2020/09/screenshot-www.vox_.com-2020.09.08-10_49_54.jpg",
     },
     {
       id: 3,
         title: "Engadget",
        desc: "Engadget has expanded from a humble news organization into a leading global technology blog with millions of visitors onboard. Readers come to the blog for the latest reviews and news in entertainment, gaming, and tech, and leave both satisfied & informed. This tech blog can also be used to dig into the archives of some of the best, early tech publications.",
         img: "https://blog.bit.ai/wp-content/uploads/2020/09/screenshot-www.engadget.com-2020.09.08-10_56_16.jpg",
       },
       {
         id: 4,
         title: "Gizmodo",
        desc: "Gizmodo is the best online tech portal to follow all the latest news related to the gadget. Here, you can read guides and watch tutorials that explain all about the fresh gadgets in the market.",
         img: "https://blog.bit.ai/wp-content/uploads/2020/09/screenshot-gizmodo.com-2020.09.08-10_55_42.jpg",
       },
     ];
     return (
      <div className='home'>
        <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                </Link>
                <p>{post.desc}</p>
                <button>Read More</button> 
            </div>
          </div>
        ))}
      </div>
      </div>
     )
}


export default Home