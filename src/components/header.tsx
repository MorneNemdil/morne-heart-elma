// import { useNavigate } from "react-router-dom";

import { Heart } from "lucide-react";

const Header = () => {
    // const nav = useNavigate();

    return (
        <div className="sticky top-0 z-30">
            {/* <div className={'bg-[var(--background)] shadow-lg flex items-center justify-center gap-10 sm:gap-40 py-3 md:w-full '}>
                <h1 onClick={() => nav("/")} className='flex items-center gap-2 hover:cursor-pointer hover:scale-105 transition duration-300'>✨<span className='text-3xl'>Home</span>✨</h1>
                <h1 onClick={() => nav("/blog")} className='flex items-center gap-2 hover:cursor-pointer hover:scale-105 transition duration-300'>✨<span className="text-3xl">Blog</span>✨</h1>
                
            </div> */}
            <div className={'bg-[var(--background)] shadow-lg flex items-center justify-center gap-5 md:gap-25 lg:gap-40 py-3 md:w-full '}>
                ✨
                <h1 className="text-3xl">Morne</h1>
                <Heart className="heartbeat stroke-red-500 fill-red-500" fill="currentColor" size={22} />
                <h1 className="text-3xl">Elma</h1>
                ✨
            </div>
        </div>
    );
};

export default Header;