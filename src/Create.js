import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
const CreateNewBlog = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('Name');
    const [body, setBody] = useState('body');
    const [isPending, setIsPending] = useState(false);
    const navigate= useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = {title, author, body};
        setIsPending(true);
        fetch('http://localhost:8000/blogs/', {
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("new added");
            setIsPending(false);
            navigate('/');
        })
        
    }
    

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title: </label>
                <input type='text' required value={title} onChange={(e)=>setTitle(e.target.value)} />
                <label>Blog Author: </label>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="Priyank">Priyank</option>
                    <option value="Malay">Malay</option>
                    <option value="Luiji">Luiji</option>

                </select>
                <label>Blog body: </label>
                <textarea required value={body} onChange={(e)=>setBody(e.target.value)} ></textarea>
                {!isPending &&  <button>Add Blog</button>}
                {isPending &&  <button disabled>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default CreateNewBlog;