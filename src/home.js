import { useState } from "react";


const Home = () => {
   const [blogs, setBlogs] = useState([
    {title: 'My new website', body: 'lorem ispum..', author: 'mario', id: 1},
    {title: 'welcome party', body: 'lorem ispum..', author: 'yoshi', id: 2}, 
    {title: 'new website', body: 'lorem ispum..', author: 'game', id: 3}
   ]);
    
     
    return (  
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>

            ))}
        
        </div>
    );
}
 
export default Home;