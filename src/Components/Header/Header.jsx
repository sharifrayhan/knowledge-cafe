import profile from "../../images/profile.png"


const Header = () => {
    return (
        <div >
        <div className=' flex items-center justify-between'>
            <h1 className=' text-xl font-bold'>Knowledge Cafe</h1>
        <div className="avatar">
            <div className=" w-21 rounded-full">
                <img src={profile} />
            </div>
        </div>
            
        </div>
        <hr className=' mt-2 text-[#D3D3D3]' />
        </div>
    );
};

export default Header;