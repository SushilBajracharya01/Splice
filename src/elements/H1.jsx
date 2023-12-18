import PropTypes from 'prop-types';

export default function H1({ children, className }) {
    return (
        <h1 className={`${className} break-words font-black text-4xl sm:text-5xl`}>{children}</h1>
    )
}

H1.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}