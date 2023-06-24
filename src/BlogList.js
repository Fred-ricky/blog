/* eslint-disable no-template-curly-in-string */
import { Link } from "react-router-dom";

const BlogList = ({blogs}) => {
    

    return ( 
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                     <Link to={'/blogs/${blog.id}'}>
                        <h2>{ blog.Title }</h2>
                        <p>Written by { blog.author }</p>
                        <p>{blog.id}</p>
                    </Link>
                </div>

            ))}

        </div>
     );
}
 



export default BlogList;