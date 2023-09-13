import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

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

Blogs.propTypes ={
    handleAddBookmarks: PropTypes.func,
    handleTime: PropTypes.func
}

export default Blogs;