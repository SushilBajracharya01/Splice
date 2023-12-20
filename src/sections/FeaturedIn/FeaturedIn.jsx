import VarietySvg from '../../assets/variety.svg';
import BillboardSvg from '../../assets/billboard.svg';
import TheVergeSvg from '../../assets/theverge.svg';
import WiredSvg from '../../assets/wired.svg';
import ComplexSvg from '../../assets/complex.svg';
import H3 from '../../elements/H3';


export default function FeaturedIn() {
    return (
        <div className="pt-28 pb-20 px-8">
            <div className="mx-auto flex flex-col items-center">
                <H3 className='text-[#606060] mb-8 lg:mb-4'>Featured in</H3>
                <div className='flex justify-around items-center gap-20 flex-wrap'>
                    <img src={VarietySvg} alt="variety" />
                    <img src={BillboardSvg} alt="variety" />
                    <img src={TheVergeSvg} alt="variety" />
                    <img src={WiredSvg} alt="variety" />
                    <img src={ComplexSvg} alt="variety" />
                </div>
            </div>
        </div>
    )
}