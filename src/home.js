import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {
   const [blogs, setBlogs] = useState(null);
   const [isPending, setISPending] = useState(true);
   const [error, setError] = useState(null);

   
   useEffect(() => {
    fetch('http://localhost:8000/blogs')
        .then(res => {
            if (res.ok) {
                throw Error('COULD NOT FETCH THE DATA');
            }
          return  res.json();
        })
        .then(data => {
            console.log(data);
            setBlogs(data);
            setISPending(false);
            setError(null);
        })
        .catch(err => {
            setISPending(false);
            setError(err.message);
    });
   }, []);
    
    
return (  
    <div className="home">
        { error && <div>{ error }</div>}
        { isPending && <div>loading ...</div>}
        {blogs && <BlogList  blogs={blogs} title='All Blogs!' />}
       
    </div>
    );
}
 
export default Home;