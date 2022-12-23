// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import React from "react";
const Home = () => {

    const { data : blogs, isPending, error } = useFetch('http://localhost:8000/blogs'); 


    //using custom hooks it would be good if it can be used in a different component

    //If the state is changed then the function must re render in order to show the changes in the state function
    //In order to re render the state we need to use "Use state Hook"

    //Deleting the Blog
    //As we are executing th esetBlogs use state it is benificial to define function here
    


    //useEffect is the best place to fetch the data in the hook 
    

    //useEffect dependencies

    return ( 
    <div className="home">
        {error && <div>{ error }</div> }
        {isPending && <div>Loading...</div>}
       {blogs && <BlogList blogs = {blogs} title="All Blogs" />}
      {/* <BlogList blogs = {blogs.filter((blog)=>blog.author==='Priyank')} title="Priyank Blogs" handleDelete = {handleDelete} /> */}
       
    </div>

 );
        } 
 
export default Home;