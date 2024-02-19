"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import useSWR from "swr";

import "./weatherWiidget.component.scss";

export interface WeatherWidgetProps {}

const WeatherWidget = (props: WeatherWidgetProps): React.ReactElement => {
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=34.9285&lon=138.6007&appid=${apiKey}`;

    const fetcher = (endpoint: string) =>
        fetch(endpoint).then((res) => res.json());
    const { data, error, isLoading } = useSWR(endpoint, fetcher);
    const [showInfo, setShowInfo] = useState(false);

    if (!!error) {
        return <></>;
    }
    console.log(data);

    return (
        <>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 5,
                    repeatType: "loop",
                    ease: "linear",
                }}
                className="widget"
            >
                {isLoading ? (
                    <Image
                        src="/images/loading.png"
                        alt="widget"
                        height={100}
                        width={100}
                    />
                ) : (
                    <Image
                        onMouseEnter={() => {
                            setShowInfo(true);
                        }}
                        onMouseLeave={() => {
                            setShowInfo(false);
                        }}
                        src="/images/season.png"
                        alt="widget"
                        height={100}
                        width={100}
                    />
                )}
            </motion.div>
            <AnimatePresence>
                {showInfo && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "6rem" }}
                        exit={{ height: 0 }}
                        className="weather-info"
                    >
                        <h3>{data.weather[0].description}</h3>
                        <div className="info">
                            <h4>Temperature: </h4>
                            <span>{data.main.temp}K</span>
                        </div>
                        <div className="info">
                            <h4>Humidity: </h4>
                            <span>{data.main.humidity}%</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default WeatherWidget;
