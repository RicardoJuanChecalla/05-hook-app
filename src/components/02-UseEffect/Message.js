import React, { useEffect, useState } from 'react'

export const Message = () => {
    const [coords, setCoords] = useState({ x:0, y:0 });
    const { x, y} = coords;

    useEffect(() => {
        // effect
        // console.log('componente montado');
        const mouseMove = (e)=>{
            const coors = { x: e.x, y: e.y};
            setCoords(coors);
            //console.log(coords);
            //console.log(' :D ');
        }
        window.addEventListener('mousemove',mouseMove);

        // window.addEventListener('mousemove',(e)=>{
        //     // console.log(e);
        //     // const coords = { x: e.x, y: e.y};
        //     // console.log(coords);
        //     console.log(' :D ');
        // });

        return () => {
            // cleanup
            // console.log('componente desmontado');
            window.removeEventListener('mousemove',mouseMove);
        }
    }, [])

    return (
        <div>
            <h3>Eres genial!</h3>
            <p>x:{x} y:{y} </p>
        </div>
    )
}
