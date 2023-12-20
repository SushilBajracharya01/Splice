import Curve from '../../assets/IntrocurveNegative.svg';
import IntroImg from '../../assets/introduction.png';

import CTA from '../../elements/CTA';

export default function Introduction() {
    return (
        <div className="min-h-[80vh] bg-[#F4F6F9] flex relative">
            <div className="mx-auto container flex justify-center items-center lg:justify-start p-8">
                <div>
                    <div className='bg-intro-overlay bg-contain bg-center lg:max-w-[530px]'>
                        <h1 className='text-center lg:text-left text-[4.8rem] leading-[5rem] font-black mix-blend-lighten bg-[#F4F6F9]'>Where your music starts</h1>
                    </div>

                    <p className='text-center lg:text-left mb-8 mt-6 text-[18px] text-[#595959] lg:max-w-[490px]'>
                        Royalty-free sounds. Industry-leading software. Endless inspiration. Start creating with Splice.
                    </p>

                    <div className='text-center lg:text-left'>
                        <CTA label="Sign up" />
                    </div>
                </div>
            </div>

            <img src={IntroImg} alt='splice' className='z-10 absolute right-0 top-0 hidden lg:block w-[48%]' />

            <img src={Curve} alt="" className="absolute bottom-0 left-0 w-full" />
        </div>
    )
}