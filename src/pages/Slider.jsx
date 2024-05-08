import Image from "next/image";
import { useState } from "react";
import lapiceroBtn from "./../assets/imgs/lapiceroBtn.png"
import lapicero from "./../assets/imgs/lapicero.png"
import bolsaBtn from "./../assets/imgs/bolsaBtn.png"
import cilindroBtn from "./../assets/imgs/cilindroBtn.png"
import cuboBtn from "./../assets/imgs/cuboBtn.png"
import termoBtn from "./../assets/imgs/termoBtn.png"
import bolsa from "./../assets/imgs/bolsa.png"
import cilindro from "./../assets/imgs/cilindro.png"
import termo from "./../assets/imgs/termo.png"
import cubo from "./../assets/imgs/cubo.png"



const Slider = () => {
    const [visibleIndex, setVisibleIndex] = useState(0);
    const [deg, setDeg] = useState(0)

    // Color de la escena según el producto
    const backgrounds = {
        0: 'bg-[url("./../assets/backgrounds/violetbg.png")]',
        1: 'bg-[url("./../assets/backgrounds/pinkbg.png")]',
        2: 'bg-[url("./../assets/backgrounds/orangebg.png")]',
        3: 'bg-[url("./../assets/backgrounds/bluebg.png")]',
        4: 'bg-[url("./../assets/backgrounds/greenbg.png")]',
    }

    // Cambio de color en el circulo inferior derecha que realiza la transición de producto
    const colorCircle = {
        0: "bg-[#48158B]",
        1: "bg-[#FF2F7E]",
        2: "bg-[#EC9C02]",
        3: "bg-[#1E3B8F]",
        4: "bg-[#198A38]"
    }
    
    // Imagen del producto tamaño completo
    const bigImage = {
        0: lapicero,
        1: bolsa,
        2: cilindro,
        3: termo,
        4: cubo
    }
    
    // Restricción de valores de ángulo entre 0 y 360 grados
    const normalizeAngle = (angle) => {
        return (angle % 360 + 360) % 360;
    };
    const position = {
        0: 0,
        1: 72,
        2: 144,
        3: 216,
        4: 288,
    }
    
    // Función para seleccionar la imagen actual
const handleBtn = (index) => {
    // Calcular el nuevo ángulo basado en el índice del botón y el ángulo actual
    let currentDeg = deg;
    currentDeg = position[index];
    setDeg(normalizeAngle(currentDeg));

    // Actualizar el índice visible
    setVisibleIndex(index);
};

    return(
        <section className={`flex flex-row w-screen h-screen ${backgrounds[visibleIndex]}`}>
            <div className="flex flex-col justify-center w-6/12 ml-20 text-white gap-10">
                <div className="w-full">
                    <h1 className="text-9xl font-extrabold">BEST SELLERS</h1>
                    <h2 className="text-5xl ml-2 font-light">Lo mejor de los promocionales</h2>
                </div>
                <div className="w-full flex flex-row scale-105">
                    <button className="flex flex-col justify-between items-center" onClick={() => handleBtn(0)}>
                        <Image src={lapiceroBtn} />
                        <div className={`bg-white w-2/3 border-2 rounded-lg ${visibleIndex === 0 ? "" : "hidden"}`}></div>
                    </button>
                    <button className="flex flex-col justify-between items-center" onClick={() => handleBtn(1)}>
                        <Image src={bolsaBtn} />
                        <div className={`bg-white w-2/3 border-2 rounded-lg ${visibleIndex === 1 ? "" : "hidden"}`}></div>
                    </button>
                    <button className="flex flex-col justify-between items-center" onClick={() => handleBtn(2)}>
                        <Image src={cilindroBtn} />
                        <div className={`bg-white w-2/3 border-2 rounded-lg ${visibleIndex === 2 ? "" : "hidden"}`}></div>
                    </button>
                    <button className="flex flex-col justify-between items-center" onClick={() => handleBtn(3)}>
                        <Image src={termoBtn} />
                        <div className={`bg-white w-2/3 border-2 rounded-lg ${visibleIndex === 3 ? "" : "hidden"}`}></div>
                    </button>
                    <button className="flex flex-col justify-between items-center" onClick={() => handleBtn(4)}>      
                    <Image src={cuboBtn} />
                        <div className={`bg-white w-2/3 border-2 rounded-lg ${visibleIndex === 4 ? "" : "hidden"}`}></div>
                    </button>
                </div>
            </div>
            <div className="flex flex-col justify-end items-end w-6/12 h-full overflow-hidden">
                <div className={`w-[800px] relative top-[380px] left-[500px] h-[1000px] rounded-full scale-125 ${colorCircle[visibleIndex]} ${deg < 361 ? 'transition-rotation' : ''}`}
                style={{ transform: `rotate(${deg}deg)` }}
                >
                <Image  src={bigImage[0]}  width={700} height={700}  className="absolute bottom-[450px] right-[450px]"/>
                <Image  src={bigImage[1]}  width={700} height={700} className="absolute right-[520px] top-[400px] -rotate-[75deg]"/>
                <Image  src={bigImage[2]} width={700} height={700} className="absolute -rotate-[150deg] -bottom-[500px] left-[100px]"/>
                <Image  src={bigImage[3]} width={600} height={600} className="absolute -rotate-[220deg] -right-[400px] top-[150px]"/>
                <Image  src={bigImage[4]} width={700} height={700} className="absolute -rotate-[290deg] -top-[450px] -right-[200px]"/>
                </div>
            </div>
        </section>
    )
} 

export default Slider;