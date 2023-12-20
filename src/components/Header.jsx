import SpliceLogo from '../assets/Splice.svg';
import CTA from '../elements/CTA';
import NavLink from '../elements/NavLink';

export default function Header() {
    return (
        <div className="p-8 absolute z-30 w-full">
            <div className="container mx-auto flex items-center justify-between" >
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
        </div>
    )
}