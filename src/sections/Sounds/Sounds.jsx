import CTA from "../../elements/CTA";
import H1 from "../../elements/H1";
import H3 from "../../elements/H3";
import SoundImg from '../../assets/sounds.png'

export default function Sounds() {
    return (
        <div className="px-8 py-12">
            <div className="mx-auto max-w-[640px] flex flex-col text-center gap-12">
                <div>
                    <H3 className='text-[#605f6080]'>Sounds</H3>

                    <H1 className='text-[#272727]'>
                        Find your
                        <span className="text-blue-600 ml-3">sound</span>
                    </H1>

                    <p className='mt-4 mb-8 text-[#958A8A]'>
                        Preview and download millions of royalty-free samples from top producers, artists, and sound designers. Available on desktop, web, and mobile.
                    </p>

                    <div className="text-center">
                        <CTA label="Try sounds" />
                    </div>
                </div>

                <img src={SoundImg} alt="" />
            </div>
        </div>
    )
}