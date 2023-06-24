import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');

    const handleSubmit = (e) => {
    
        e.preventDefault();
        const blog = { title, body, author };
        
    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Blog Title</label>
                <input 
                    type="text" 
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="">Blog body</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)} 
                ></textarea>
                <label htmlFor="">Blog author</label>
                <select 
                    value={author}
                    onChange={(e) => setBody(e.target.value)} 
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>

                </select>
                <button>Add blog</button>
            </form>
        </div>
     );
}
 
export default Create;