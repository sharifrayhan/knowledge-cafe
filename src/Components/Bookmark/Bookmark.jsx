import PropTypes from 'prop-types';

const Bookmark = ({item}) => {
    const {blog_title} = item
    return (
        <div className=' bg-white p-3 rounded-lg mb-2'>
            {blog_title}
        </div>
    );
};

Bookmark.propTypes ={
    item: PropTypes.object
}

export default Bookmark;