import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Time from './Components/Time/Time'


function App() {
  
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  const handleTime = time => {
    setReadingTime(readingTime+parseInt(time))
    // console.log("yoo time is ", time)
  }

  return (
    <>
    {/* body */}
    <div className=' mx-4 md:mx-23 lg:mx-32 my-3'>
    {/* header section */}
    <div>
    <Header></Header>
    </div>
    {/* main section */}
    <div className=' w-full mt-2 flex flex-col md:flex-row lg:flex-row gap-2'>
      {/* Blog section */}
      <div className="w-full  md:w-2/3 lg:w-2/3">
          <Blogs handleAddBookmarks={handleAddBookmarks} handleTime={handleTime}></Blogs>
          
      </div>
      {/* Bookmark section */}
      <div className="w-full p-2 rounded-lg md:w-1/3 lg:w-1/3">
        <div className=" bg-[#F3F3F3] mb-2 rounded-lg">
          <Time time={readingTime}></Time>
        </div>
        <div className=" bg-[#F3F3F3] p-4 rounded-lg">
          <Bookmarks newBookmarks={bookmarks} ></Bookmarks>
        </div>
      </div>
    </div>
    </div>
      
    </>
  )
}

export default App
