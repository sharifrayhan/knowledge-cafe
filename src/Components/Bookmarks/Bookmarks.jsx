import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({newBookmarks}) => {
    // const [blog_title] = newBookmarks;
    return (
        <div>
                 
      <h1 className="font-bold mb-2">Bookmarked Blogs : {newBookmarks.length}</h1>
   
   {
       newBookmarks.map(item=><Bookmark item={item}></Bookmark>)
   }
        </div>
    );
};

export default Bookmarks;