import PropTypes from 'prop-types';

// Define and use PropTypes in your components


const Blog = ({blog}) => {
    const { id, cover_img, blog_title, author, hashtags, posted_date, reading_time } = blog;
    const { name, author_img } = author;
    const [hash1,hash2] = hashtags;
    return (
        <div className="w-full bg-base-100 shadow-xl mb-2 rounded-md ">
            <figure><img src={cover_img} /></figure>
            <div className="flex flex-col gap-2 p-5">
                
                <h2 className=" flex  justify-between items-center">
                    <div className='flex gap-2'>
                        <div className="avatar">
                            <div className=" w-10 rounded-full">
                                <img src={author_img} />
                            </div>
                        </div>

                        <div className=''>
                            <h1 className='font-bold mb-0'>{name}</h1>
                            <p className=' text-xs'>{posted_date}</p>
                        </div>

                    </div>
                    <p className='text-sm'>{reading_time} min read</p>
                </h2>
                <h1 className=' font-extrabold'>{blog_title}</h1>
                <div >
                <p className='text-sm'>{hash1}, {hash2} </p>
                <a className='text-sm' href="">Mark As Read</a>
                </div>
            </div>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired
}
export default Blog;