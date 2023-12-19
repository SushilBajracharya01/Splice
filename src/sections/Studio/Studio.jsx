import StudioImg from '../../assets/studio.png';
import CTA from '../../elements/CTA';
import H1 from '../../elements/H1';
import H3 from '../../elements/H3';

export default function Studio() {
    return (
        <div className="studio px-8 pb-80 pt-24">
            <div className="mx-auto flex justify-between items-center max-w-[1280px] flex-col gap-8 md:flex-row">
                <div className='max-w-[400px]'>
                    <H3 className='text-[#605f6080]'>Studio</H3>

                    <H1 className='text-[#272727]'>
                        Stay in <span className="text-blue-600">Sync</span>
                    </H1>

                    <p className='mt-4 mb-8 text-[#958A8A]'>
                        Try industry-leading music software for free, pay it off over time and own it forever.
                    </p>

                    <CTA label="try studio" />
                </div>

                <div>
                    <img src={StudioImg} alt="studio" />
                </div>
            </div>
        </div>
    )
}