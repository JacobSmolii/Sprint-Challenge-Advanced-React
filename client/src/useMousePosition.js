import React,{useEffect,useState} from "react";

export function useMousePosition(){

    const[pos,setPos] = useState({x:0,y:0})

    useEffect(() => {
        const handleMouseMove = e => setPos({x: e.clientX, y: e.clientY})

        window.addEventListener('mousemove',handleMouseMove)

        return () => {
            window.removeEventListener('mousemove',handleMouseMove)
        }
    },[])
    return pos
}