import { PropTypes } from "prop-types"

export default function NavLink({ variant, children }) {
    let classNames = "uppercase text-sm cursor-pointer font-semibold";
    switch (variant) {
        case "white":
            classNames += " text-white hover:text-[#444]";
            break;
        default:
            classNames += " text-[#272727] hover:text-[#000]";
            break;
    }
    return (
        <span className={classNames}>{children}</span>
    )
}

NavLink.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.node,
}