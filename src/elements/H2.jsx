import PropTypes from 'prop-types';

export default function H2({ children, className }) {
    return (
        <h2 className={`${className} break-words font-black text-3xl sm:text-4xl`}>{children}</h2>
    )
}

H2.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}