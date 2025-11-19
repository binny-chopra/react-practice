import { useEffect, useState, useRef, useCallback } from "react"

const PasswordGenerator = () => {
    const [pswd, setPswd] = useState("");
    const [pswdLength, setPswdLength] = useState(8);
    const [numsAllowed, setNumsAllowed] = useState(false);
    const [symbolsAllowed, setSymbolsAllowed] = useState(false);
    const passwordRef = useRef(null);

    const pswdGenerator = useCallback(() => {
        const nums = "0123456789";
        const symbols = "!@#$%^&*-_+=[]{}~";
        let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let generatedPswd = "";

        if (numsAllowed) alpha += nums;
        if (symbolsAllowed) alpha += symbols;

        for (let i = 1; i <= pswdLength; i++) {
            let char = Math.floor(Math.random() * alpha.length)
            generatedPswd += alpha.charAt(char)
        }

        setPswd(generatedPswd)
    }, [pswdLength, numsAllowed, symbolsAllowed])

    useEffect(() => {
        pswdGenerator();
    }, [pswdLength, numsAllowed, symbolsAllowed, pswdGenerator])

    const handleClick = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 999);
        window.navigator.clipboard.writeText(pswd);
    }, [pswd])

    return (
        <div className="w-full h-screen text-center text-white">
            <h1 className="text-4xl pt-5 pb-10">Password Generator</h1>
            <input className="p-2 w-96 bg-pink-500 cursor-not-allowed" type="text" value={pswd} readOnly ref={passwordRef} />
            <button className="p-2 bg-pink-800" onClick={handleClick}>Copy</button>
            <div className="flex items-center gap-6 justify-center mt-4">
                <div className="flex items-center gap-2">
                    <input
                        className="my-2"
                        type="range"
                        min={8}
                        max={40}
                        value={pswdLength}
                        onChange={(e) => setPswdLength(Number(e.target.value))}
                    />
                    <label>Length: {pswdLength}</label>
                </div>
                <div className="flex items-center gap-2">
                    <input
                        className="my-2"
                        type="checkbox"
                        defaultChecked={numsAllowed}
                        onChange={() => setNumsAllowed(prev => !prev)}
                    />
                    <label>Number</label>
                </div>
                <div className="flex items-center gap-2">
                    <input
                        className="my-2"
                        type="checkbox"
                        defaultChecked={symbolsAllowed}
                        onChange={() => setSymbolsAllowed(prev => !prev)}
                    />
                    <label>Symbol</label>
                </div>
            </div>
        </div>
    )
}

export default PasswordGenerator
