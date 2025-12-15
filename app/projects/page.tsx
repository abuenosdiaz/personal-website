'use client';
import { useState } from "react"; 

export default function Projects() {
    const [clicked, setClicked] = useState(false);

    return (
        <>
            <h1>Projects</h1>
            <button onClick={() => console.log("clicked")}>
                Click
            </button> 
            {clicked && <p>Button was clicked</p>}
        </>

    )
}


