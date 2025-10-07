import { useEffect, useState } from "react";




export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('black');

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }
    function handleCreateRandomHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "d", "E", "F"];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor);
    }
    function handleCreateRandomRbgColor() {
         const r = randomColorUtility(256);
         const g = randomColorUtility(256);
         const b = randomColorUtility(256);
        setColor(`rgb(${r},${g},${b})`);
        console.log(setColor);
        
    }

    useEffect(()=>{
        if(typeOfColor === "hex") handleCreateRandomHexColor();
        else handleCreateRandomRbgColor()
    }, [typeOfColor]);
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: color
        }} >
            <button onClick={() => setTypeOfColor("hex")} >Create Hex</button>
            <button onClick={() => setTypeOfColor("rgb")} >Create RGB </button>
            <button onClick={typeOfColor === "hex" ? handleCreateRandomHexColor : handleCreateRandomRbgColor}>Create random color</button>
            <div>
                <h1>{typeOfColor === 'rgb' ? "rbg color" : "hex color"}</h1>   
                <h3>{color}</h3>
            </div>
        </div>
    );
}