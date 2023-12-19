import CTA from "../../elements/CTA";
import H1 from "../../elements/H1";
import H3 from "../../elements/H3";
import PluginImg from '../../assets/plugins.png';

export default function Plugins() {
    return (
        <div className="px-8 py-24">
            <div className="mx-auto flex justify-between items-center max-w-[1280px] flex-col-reverse gap-12 md:flex-row">
                <div>
                    <img src={PluginImg} alt="plugins" />
                </div>

                <div className="max-w-[425px]">
                    <H3 className='text-[#605f6080]'>Plugins</H3>

                    <H1 className='text-[#272727]'>
                        Build your
                        <div className="text-blue-600">
                            digital studio
                        </div>
                    </H1>

                    <p className='mt-4 mb-8 text-[#958A8A]'>
                        Try industry-leading music software for free, pay it off over time and own it forever.
                    </p>

                    <CTA label="Try gear" />
                </div>
            </div>
        </div>
    )
}