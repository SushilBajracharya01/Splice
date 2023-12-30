import { Download } from '../../assets/Download.jsx';
import OvalEnd from '../../assets/OvalEnd.svg';
import { Play } from '../../assets/Play.jsx';
import { Unlock } from '../../assets/Unlock.jsx';
import { VolumeUp } from '../../assets/VolumeUp.jsx';
import CTA from '../../elements/CTA.jsx';
import H2 from '../../elements/H2';

export default function Features() {
    return (
        <div className="features bg-[#0C0C0C] relative mb-36 bg-feature-patterns bg-no-repeat bg-cover bg-center min-h-screen">
            <div className="container mx-auto px-8 pt-32 pb-96 sm:pb-80">
                <H2 className='text-white text-center mb-16 xl:mb-28'>As good as it sounds</H2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {
                        FEATURES_LIST.map(feature => (
                            <div className='flex flex-col items-center md:items-start text-center md:text-left' key={feature.title}>
                                {feature.icon}
                                <h4 className='font-extrabold text-2xl text-white my-3'>{feature.title}</h4>
                                <p className='text-[#958A8A] max-w-[350px]'>{feature.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='absolute w-full z-10 -bottom-11'>
                <div className='mx-auto flex justify-center flex-col relative p-14 bg-gradient-to-r from-purple-400  via-blue-700 to-red-500 max-w-[90%] rounded-3xl'>
                    <div className='z-10 mx-auto'>
                        <H2 className='text-white max-w-[550px] text-center'>
                            Come change the way people make music
                        </H2>

                        <div className='text-center mt-8'>
                            <CTA label="Jobs at splice" />
                        </div>
                    </div>

                </div>
            </div>

            <img src={OvalEnd} alt="" className='absolute bottom-[-1px] w-full h-[150px]' />
        </div>
    )
}

const FEATURES_LIST = [
    {
        icon: <VolumeUp />,
        title: "100 royalty free",
        description: "Use sounds for anything. They’re cleared for commercial use."
    }, {
        icon: <Unlock />,
        title: "No commitments",
        description: "Cancel your subscription at any time, no questions asked."
    }, {
        icon: <Download />,
        title: "Yours forever",
        description: "Keep everything you download. Even if you cancel."
    }, {
        icon: <Play />,
        title: "Individual samples",
        description: "Preview & download individual samples, not just full packs."
    },
]