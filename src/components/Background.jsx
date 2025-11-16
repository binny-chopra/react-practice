import { useState } from "react"
import { SLATE_BG_800, BG_COLORS } from "../utils/constants"

const BackgroundComponent = () => {
    let [color, setColor] = useState(SLATE_BG_800)

    const handleColorChange = (newColor) => (setColor(newColor))

    return (
        <>
            <div className={`w-full h-screen flex flex-col text-white text-center ${color}`}>
                <h2 className="text-3xl pt-5 pb-10">Change Background Color</h2>
                <h3 className="text-2xl">I am {`${color}`}</h3>
                <div className="flex-grow flex items-center justify-center">
                    <div className="flex flex-wrap justify-evenly">
                        {BG_COLORS.map((item) => (
                            <button
                                key={item.name}
                                className={`${item.bgColor} w-14 py-2 m-2 rounded-xl border-2 border-white hover:shadow-2xl transition duration-300`}
                                onClick={() => handleColorChange(item.bgColor)}>
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div >
        </>
    )
}

export default BackgroundComponent
