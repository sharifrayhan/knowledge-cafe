

const Bookmarks = ({newBookmarks}) => {
    const [blog_title] = newBookmarks;
    return (
        <div >
            <h1 className="font-bold">Bookmarked Blogs{newBookmarks.length}</h1>
        </div>
    );
};

export default Bookmarks;