const MainHeart = ({ className, picture }: { className?: string, picture: string }) => {
    return (
        <div className={`relative flex justify-center items-center ${className ?? ""}`}>
            <svg
                viewBox="0 0 24 24"
                className="-translate-x-[10%] translate-y-20 block lg:w-240 md:w-200 sm:w-150 w-120 drop-shadow-[0_0_20px_rgba(255,0,0,0.7)]"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    <clipPath id="heart-clip">
                        <path
                            fill="currentColor"
                            d="M20.8 4.6c-1.5-1.5-4-1.5-5.5 0l-.8.8-.8-.8c-1.5-1.5-4-1.5-5.5 0s-1.5 4 0 5.5l6.3 6.3 6.3-6.3c1.5-1.5 1.5-4 0-5.5z"
                        />
                    </clipPath>
                </defs>
                <image
                    href={picture}
                    width="100%"
                    height="100%"
                    clipPath="url(#heart-clip)"
                    preserveAspectRatio="xMidYMid slice"
                    className=""
                />
            </svg>
        </div>
    );
};

export default MainHeart;
