import { useEffect, useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import { TbMapPin } from "react-icons/tb";

import Places from './data/places.json'

type Place = {
    title: string;
    location: string;
    iframesrc: string;
}

function App()
{
    const [randomPlace, setRandomPlace] = useState<Place | null>(null)

    const pickRandomPlace = () => {
        const random = Places[Math.floor(Math.random() * Places.length)]
        setRandomPlace(random)
    }

    useEffect(() => {
        pickRandomPlace()
    }, [])

    return (
        <main>
            <header>
                <div className="upperHeader">
                    <h1 className="title">
                        <span className="tag">&lt;</span>
                        andreas
                        <span className="tag"> /&gt;</span>
                    </h1>
                    <h1>Still Earth</h1>
                    <button onClick={pickRandomPlace}><GrPowerReset />Random</button>
                </div>
            </header>

            {
                randomPlace && (
                    <iframe src={randomPlace.iframesrc} frameBorder="0"></iframe>
                )
            }

            <div className="lowerHeader">
                <h1>{randomPlace?.title}</h1>
                <div className="locationContainer">
                    <h2><TbMapPin /></h2>
                    <p>{randomPlace?.location}</p>
                </div>
            </div>
        </main>
    )
}

export default App
