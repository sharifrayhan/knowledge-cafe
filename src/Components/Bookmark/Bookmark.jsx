import React from 'react';

const Bookmark = ({item}) => {
    const {blog_title} = item
    return (
        <div className=' bg-white p-3 rounded-lg mb-2'>
            {blog_title}
        </div>
    );
};

export default Bookmark;