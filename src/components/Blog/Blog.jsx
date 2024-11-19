import React from 'react';
import { BsBookmark } from "react-icons/bs";
import PropTypes from 'prop-types';

const Blog = ({blog, handleAddToBookmark}) => {
    const {title,coverImage, author, authorImage, readingTime, postedDate,hashtag} = blog;
    return (
        <div className='mb-16 mt-16'>
            <img className='w-full' src={coverImage} alt={`Cover picture of the title ${title}`}/>
            <div className='flex justify-between'>
                <div className='flex justify-center items-center gap-6'>
                    <img className='w-16 h-16 rounded-full' src={authorImage} alt="" />
                    <div>
                        <h5>{author}</h5>
                        <p>{postedDate}</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <p>{readingTime} min read</p>
                    <button 
                    onClick={()=>handleAddToBookmark(blog)}
                    ><BsBookmark></BsBookmark>
                    </button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtag.map((hash, idx) => <span key={idx}>{hash}</span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
        
    }

export default Blog;