import { Parallax } from 'react-parallax';
import Pic2 from '../assets/img/pic2.jpg'

const ImageTwo = () => (
    <Parallax  className='relative h-screen' bgImage={Pic2}  strength={600}>
        <div className="flex items-center justify-center absolute h-screen w-full">
            <span className="flex  bg-[#333] uppercase text-white p-4 text-[1.5rem] tracking-[10px]">
                    UNIVERSE
            </span>
        </div>
    </Parallax>
);

export default ImageTwo;