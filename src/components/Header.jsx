import { useState } from 'react';
import SpliceLogo from '../assets/Splice.svg';
import CTA from '../elements/CTA';
import NavLink from '../elements/NavLink';
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    const handleToggleMenu = () => setOpenMenu(prev => !prev);

    return (
        <div className="p-8 absolute z-30 w-full">
            <div className="container mx-auto xl:flex items-center justify-between hidden" >
                <div className='flex items-center justify-between gap-16'>
                    <img src={SpliceLogo} alt="splice" />

                    <NavLink>Studio</NavLink>
                    <NavLink>Plugins</NavLink>
                    <NavLink>Sounds</NavLink>
                    <NavLink>Community</NavLink>
                    <NavLink>Blogs</NavLink>
                </div>

                <div className='flex items-center gap-16'>
                    <NavLink variant='white'>Log in</NavLink>
                    <CTA variant="white" label={"Sign up"} />
                </div>
            </div>

            <div className="container mx-auto flex xl:hidden items-center justify-between" >
                <div className='flex items-center justify-between w-full'>
                    <img src={SpliceLogo} alt="splice" />

                    <button
                        onClick={handleToggleMenu}
                        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        <IoMenu className="block h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                {
                    openMenu &&
                    <div className='absolute w-full min-h-screen bg-white top-0 left-0 p-8 z-10'>
                        <div className='flex items-center justify-between w-full mb-14'>
                            <img src={SpliceLogo} alt="splice" />

                            <button
                                onClick={handleToggleMenu}
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="sr-only">Close main menu</span>
                                <IoMdClose className="block h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>

                        <div className='flex flex-col items-center justify-between gap-14'>
                            <NavLink>Studio</NavLink>
                            <NavLink>Plugins</NavLink>
                            <NavLink>Sounds</NavLink>
                            <NavLink>Community</NavLink>
                            <NavLink>Blogs</NavLink>

                            <NavLink>Log in</NavLink>
                            <CTA label={"Sign up"} />
                        </div>

                    </div>
                }

            </div>
        </div>
    )
}