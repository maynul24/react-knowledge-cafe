import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmark}) => {
    const [Blogs, setBlogs] = useState ([]);

    useEffect ( () =>{
        fetch ('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    }, [])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs</h1>
            {
                Blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                    
                    ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func       
    }

export default Blogs;