import PolaroidFrame from "@/assets/polaroid-frame.jpg";

const PolaroidImage = ({ srcImg, className }: { srcImg: string, className?: string }) => {
    return (
        <div className={"relative w-50 h-62".concat(` ${className || ""}`)}> {/* Adjust size as needed */}
            <img
                src={srcImg}
                alt="Inserted"
                className="absolute top-[4.5%] left-[7.4%] w-[85.7%] h-[73%] object-cover z-10"
            />
            <img
                src={PolaroidFrame}
                alt="Polaroid frame"
                className="absolute inset-0 w-full h-full object-contain"
            />
        </div>
    );
};

export default PolaroidImage;