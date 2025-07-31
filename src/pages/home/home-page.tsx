import { useTheme } from "@/components/theme-provider"
import { useEffect } from "react";
import PolaroidImage from "@/components/polaroid-image";
import MainHeart from "@/components/main-heart";
import { HeartSparkleBackground } from "@/components/heart-sparkle-background";
import useBreakpoint from "@/lib/use-breakpoint";
import { Card, CardContent } from "@/components/ui/card";
import BalconyPic from "@/assets/pictures/balcony.jpg";
import BedKissingPic from "@/assets/pictures/bed-kissing.jpg";
import ElevatorPic from "@/assets/pictures/elevator.jpg";
import KissingBusPic from "@/assets/pictures/kissing-bus.jpg";
import RestaurantFilterPic from "@/assets/pictures/restaurant-filter.jpg";
import SleepingSofaPic from "@/assets/pictures/sleeping-sofa.jpg";
// import MirrorPic from "@/assets/pictures/mirror.jpg";
// import SeriousPic from "@/assets/pictures/serious.jpg";
// import StandingFilterPic from "@/assets/pictures/standing-filter.jpg";
// import SunsetPic from "@/assets/pictures/sunset.jpg";

const HomePage = () => {
    const { setTheme } = useTheme();
    const breakpoint = useBreakpoint();

    useEffect(() => setTheme('dark'), []);

    const tributeMessage = "A tribute to the most beautiful, smart, thoughtful, and kind person in the world - my wife, Elma :)"

    const DesktopHome = () => {
        return (
            <div className="flex justify-center h-[93vh]">
                <div className="w-100 flex flex-col translate-x-20 translate-y-12">
                    <div className="flex justify-center w-full">
                        <PolaroidImage srcImg={BalconyPic} className="rotate-15" />
                    </div>
                    <div className="w-full">
                        <PolaroidImage srcImg={BedKissingPic} className="-rotate-15" />
                    </div>
                    <div className="flex justify-end w-full">
                        <PolaroidImage srcImg={ElevatorPic} className="rotate-15" />
                    </div>
                </div>
                <div className="flex flex-col items-center -translate-y-10">
                    <Card className="translate-y-29">
                        <CardContent>
                            <div className=" w-[30vw] text-center text-white text-xl">{tributeMessage}</div>
                        </CardContent>
                    </Card>
                    <div className="text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,190)] -translate-y-10">
                        <MainHeart picture={RestaurantFilterPic} />
                    </div>
                </div>
                <div className="w-100 flex flex-col -translate-x-20 translate-y-12">
                    <div className="flex justify-center w-full">
                        <PolaroidImage srcImg={KissingBusPic} className="-rotate-15" />
                    </div>
                    <div className="w-full flex justify-end">
                        <PolaroidImage srcImg={SleepingSofaPic} className="rotate-15" />
                    </div>
                    <div className="w-full">
                        <PolaroidImage srcImg={RestaurantFilterPic} className="-rotate-15" />
                    </div>
                </div>
            </div>
        )
    }

    const MobileHome = () => {
        return (
            <div className="flex flex-col justify-center items-center">
                <div className="w-full overflow-x-hidden overflow-y-hidden flex flex-col items-center">
                    <Card className="translate-y-17">
                        <CardContent>
                            <div className="w-[70vw] sm:w-[40vw] text-center text-white text-xl">{tributeMessage}</div>
                        </CardContent>
                    </Card>
                    <div className="text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,190)] w-100 sm:w-auto">
                        <MainHeart picture={RestaurantFilterPic} />
                    </div>
                </div>
                <div className="w-100 flex flex-col">
                    <div className="flex justify-center w-full">
                        <PolaroidImage srcImg={BalconyPic} className="rotate-15" />
                    </div>
                    <div className="flex justify-center w-full">
                        <PolaroidImage srcImg={BedKissingPic} className="-rotate-15" />
                    </div>
                    <div className="flex justify-center w-full">
                        <PolaroidImage srcImg={ElevatorPic} className="rotate-15" />
                    </div>
                </div>
                <div className="w-100 flex flex-col">
                    <div className="flex justify-center w-full">
                        <PolaroidImage srcImg={KissingBusPic} className="-rotate-15" />
                    </div>
                    <div className="w-full flex justify-center">
                        <PolaroidImage srcImg={SleepingSofaPic} className="rotate-15" />
                    </div>
                    <div className="w-full flex justify-center">
                        <PolaroidImage srcImg={RestaurantFilterPic} className="-rotate-15" />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <HeartSparkleBackground />
            {/* <MobileHome /> */}
            {breakpoint == 'sm' || breakpoint == 'md' ? <MobileHome /> : <DesktopHome />}
            <div className="h-[20vh]"></div>
        </>
    )
}

export default HomePage