import { Parallax } from 'react-parallax';
import Pic1 from '../assets/img/pic1.jpg'

const ImageOne = () => (
    <Parallax  className='relative h-screen' bgImage={Pic1}  strength={600}>
        <div className="flex items-center justify-center absolute h-screen w-full">
            <span className="bg-[#333] uppercase text-white p-4 text-[1.5rem] tracking-[10px]">
                    TIME SPACE
            </span>
        </div>
    </Parallax>
);

export default ImageOne;