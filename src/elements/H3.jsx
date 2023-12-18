import PropTypes from 'prop-types';

export default function H3({ children, className }) {
    return (
        <h3 className={`${className} uppercase break-words font-bold font-mont`}>{children}</h3>
    )
}

H3.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}