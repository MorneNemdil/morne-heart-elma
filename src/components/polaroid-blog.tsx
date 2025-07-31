import PolaroidFrame from "@/assets/polaroid-frame.jpg";

const PolaroidBlog = ({ srcImg, className }: { srcImg: string, className?: string }) => {
    return (
        <div className={"hover:cursor-pointer hover:scale-105 transition duration-300 relative border border-b-fuchsia-300 w-69 h-90 ".concat(` ${className || ""}`)}> {/* Adjust size as needed */}
            <img
                src={srcImg}
                alt="Inserted"
                className="absolute top-[4.5%] left-[5.2%] w-[89.6%] h-[73%] object-cover z-10"
            />
            <img
                src={PolaroidFrame}
                alt="Polaroid frame"
                className="absolute inset-0 w-full h-full object-contain"
            />
        </div>
    );
};

export default PolaroidBlog;