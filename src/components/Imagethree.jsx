import { Parallax } from 'react-parallax';
import Pic3 from '../assets/img/pic3.jpg'

const ImageThree = () => (
    <Parallax  className='relative h-screen' bgImage={Pic3}  strength={600}>
        <div className="flex items-center justify-center absolute h-screen w-full">
            <span className="bg-[#333] uppercase text-white p-4 text-[1.5rem] tracking-[10px]">
                    JECO LAME
            </span>
        </div>
    </Parallax>
);

export default ImageThree;