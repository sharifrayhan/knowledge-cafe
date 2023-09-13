import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'


function App() {
  
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  return (
    <>
    {/* body */}
    <div className=' mx-32 my-3'>
    {/* header section */}
    <div>
    <Header></Header>
    </div>
    {/* main section */}
    <div className=' w-full mt-2 flex flex-col md:flex-row lg:flex-row gap-2'>
      {/* Blog section */}
      <div className="w-full  md:w-2/3 lg:w-2/3">
          <Blogs handleAddBookmarks={handleAddBookmarks}></Blogs>
          
      </div>
      {/* Bookmark section */}
      <div className="w-full bg-[#F3F3F3] p-4 rounded-lg md:w-1/3 lg:w-1/3">
        <Bookmarks newBookmarks={bookmarks} ></Bookmarks>
      </div>
    </div>
    </div>
      
    </>
  )
}

export default App
