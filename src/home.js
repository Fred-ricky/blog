import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {
   const [blogs, setBlogs] = useState(null);
   const [isPending, setISPending] = useState(true);

   
   useEffect(() => {
    fetch('http://localhost:8000/blogs')
        .then(res => {
          return  res.json();})
        .then(data => {
            console.log(data);
            setBlogs(data);
            setISPending(false);
        })
        .catch(err => {
        console.log(err.message);
    });
   }, []);
    
    
return (  
    <div className="home">
        
        { isPending && <div>loading ...</div>}
        {blogs && <BlogList  blogs={blogs} title='All Blogs!' />}
       
    </div>
    );
}
 
export default Home;