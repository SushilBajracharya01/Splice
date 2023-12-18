import H1 from "../../elements/H1";

//
import WorldSvg from '../../assets/world.svg';

export default function Testimonial() {
    return (
        <div className="testimonial relative bg-[#0C0C0C] text-white min-h-screen flex justify-between p-8">
            <div className="container mx-auto flex items-center justify-between">
                <div className="lg:max-w-[400px]">
                    <H1>What <span className="text-blue-600">creators</span> are saying about Splice</H1>

                    <p className='mt-3 mb-5 text-lg text-[#958A8A] break-words'>Meet some of our amazing creators and hear firsthand about their Splice journey! Check out these short testimonials to get a glimpse into the unique experiences that make Splice a special place for artists.</p>

                    <button className='uppercase rounded-full px-12 py-3 text- bg-blue-600 hover:bg-white hover:text-blue-700 transition-colors font-medium'>
                        Try it now
                    </button>
                </div>
            </div>
            <img src={WorldSvg} alt="" className="absolute -top-52 right-0 hidden xl:block" />
        </div>
    )
}