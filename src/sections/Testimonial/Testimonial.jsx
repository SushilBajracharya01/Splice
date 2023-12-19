import H1 from "../../elements/H1";

//
import WorldSvg from '../../assets/world.svg';
import TestimonialCard from "../../components/TestimonialCard";
import AndrewImg from '../../assets/Andrew Huang.png'
import KSHMRImg from '../../assets/KSHMR.png'
import KeshaImg from '../../assets/Kesha Lee.png'
import Glass from "../../elements/Glass";

export default function Testimonial() {
    return (
        <div className="testimonial relative bg-[#0C0C0C] text-white min-h-screen flex justify-between p-8">
            <div className="container mx-auto flex gap-12 flex-col lg:flex-row items-center justify-between">
                <Glass className="lg:max-w-[464px] z-10 p-4">
                    <H1>What <span className="text-blue-400 lg:text-blue-600">creators</span> are saying about Splice</H1>

                    <p className='mt-3 mb-5 text-lg text-[#958A8A] break-words'>Meet some of our amazing creators and hear firsthand about their Splice journey! Check out these short testimonials to get a glimpse into the unique experiences that make Splice a special place for artists.</p>

                    <button className='uppercase rounded-full px-12 py-3 text- bg-blue-600 hover:bg-white hover:text-blue-700 transition-colors font-medium'>
                        Try it now
                    </button>
                </Glass>

                <div className="flex z-10 flex-wrap gap-10 max-w-[715px] justify-center xl:justify-start">
                    {
                        TestimonialData.map((testimonial, index) => <TestimonialCard key={index} message={testimonial.message} user={testimonial.user} className={index === 2 ? "xl:ml-16" : ""} />)
                    }
                </div>
            </div>
            <img src={WorldSvg} alt="" className="absolute -top-52 right-0 lg:block" />
        </div>
    )
}

const TestimonialData = [
    {
        message: "I can always find what Im looking for on Splice, whether its the exact sound I want or just a bit of inspiration.",
        user: {
            image: AndrewImg,
            name: "Andrew Huang",
            role: "Artist"
        }
    },
    {
        message: "Finally a way to buy plugins that works. By paying a little at a time, producers can get legit access to the top VSTs.",
        user: {
            image: KSHMRImg,
            name: "KSHMR",
            role: "Artist"
        }
    },
    {
        message: "Its been fun to dive into Splices creator community and explore tools that support my own creative process.",
        user: {
            image: KeshaImg,
            name: "Kesha Lee",
            role: "Artist"
        }
    },
    {
        message: "I can always find what Im looking for on Splice, whether its the exact sound I want or just a bit of inspiration.",
        user: {
            image: AndrewImg,
            name: "Andrew Huang",
            role: "Artist"
        }
    }
]