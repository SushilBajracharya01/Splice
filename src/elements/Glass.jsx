import PropTypes from 'prop-types';

export default function Glass({ children, className }) {
    return (
        <div className={`bg-black-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10
        ${className}`}>{children}</div>
    )
}

Glass.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}