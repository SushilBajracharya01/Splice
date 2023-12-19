import H3 from "../elements/H3";
import PropType from 'prop-types'

export default function TestimonialCard({ message, user, className }) {
    return (
        <div className={`p-7 bg-[#202020] md:max-w-[290px] rounded ${className}`}>
            <H3 className="text-white">
                {message}
            </H3>

            <div className="mt-6 flex items-center">
                <img src={user.image} alt={user.name} />
                <div className="ml-2 flex flex-col">
                    <div className="capitalize text-xs">{user.name}</div>
                    <div className="text-[8px]">{user.role}</div>
                </div>
            </div>
        </div>
    )
}

TestimonialCard.propTypes = {
    message: PropType.string,
    className: PropType.string,
    user: {
        image: PropType.any,
        name: PropType.string,
        role: PropType.string
    }
}