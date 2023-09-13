import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({newBookmarks}) => {
    // const [blog_title] = newBookmarks;
    return (
        <div>
                 
      <h1 className="font-bold mb-2">Bookmarked Blogs : {newBookmarks.length}</h1>
   
   {
       newBookmarks.map(item=><Bookmark key={item.id} item={item}></Bookmark>)
   }
        </div>
    );
};

Bookmarks.propTypes ={
    newBookmarks: PropTypes.array
}

export default Bookmarks;