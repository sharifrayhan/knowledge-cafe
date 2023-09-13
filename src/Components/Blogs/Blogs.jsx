import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddBookmarks, handleTime}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data=> setBlogs(data) )

    },[])
    return (
        <div >
            {
                blogs.map(
                    (blog=><Blog handleTime={handleTime} handleAddBookmarks={handleAddBookmarks} key={blog.id} blog={blog}></Blog>)
                )
            }
        </div>
    );
};

export default Blogs;