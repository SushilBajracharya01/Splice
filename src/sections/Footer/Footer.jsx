import Logo from '../../assets/logo.svg';
import H3 from '../../elements/H3';
import { FOOTER_LINK_GROUPS, FOOTER_NAV_LINKS } from './_footer_data';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="footer p-8">
            <div className="container mx-auto flex flex-col gap-10 justify-between md:flex-row">
                <div>
                    <img src={Logo} alt="splice" />
                    <p className='text-xs text-[#606060] font-mont mt-2 break-words'>2021 SpIce.com All Rights Reserved</p>
                    <p className='text-xs text-[#606060] font-mont mt-2 break-words'>
                        Thanks to <a className='font-semibold' href='https://dribbble.com/shots/14970666-Splice-Landing-Page' target='_blank' rel="noreferrer">Nate Holland</a> for this wonderful design.
                    </p>
                </div>

                <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-14'>
                    {
                        FOOTER_LINK_GROUPS.map(linkGroup => {
                            return (
                                <div key={linkGroup.title} className='max-w-[180px]'>
                                    <H3 className='mb-3'>{linkGroup.title}</H3>

                                    <div className='flex flex-col'>
                                        {linkGroup.links.map(link => <span key={link.link} className='text-[#606060] font-mont text-sm mb-4 cursor-pointer hover:text-[#000] transition-colors break-words'>{link.label}</span>)}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='lg:max-w-[330px]'>
                    <H3>
                        FIND US ON SOCIAL
                    </H3>

                    <div className='flex flex-wrap gap-x-4 mt-8'>
                        <FaFacebook className='cursor-pointer text-[#0C0C0C]' />
                        <FaSquareXTwitter className='cursor-pointer text-[#0C0C0C]' />
                        <FaInstagram className='cursor-pointer text-[#0C0C0C]' />
                        <FaYoutube className='cursor-pointer text-[#0C0C0C]' />
                    </div>

                    <div className='flex flex-wrap gap-y-4 gap-x-8 mt-8'>
                        {
                            FOOTER_NAV_LINKS.map(link => <div key={link.link} className='cursor-pointer text-[#606060] font-mont break-words capitalize text-xs hover:text-[#000] transition-colors'>{link.label}</div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}