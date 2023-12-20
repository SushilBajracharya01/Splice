import PropTypes from 'prop-types';

export default function CTA({ label, variant }) {
    let classNames = 'uppercase rounded-full px-12 py-3 text-white transition-colors font-medium';
    switch (variant) {
        case 'white':
            classNames += ' bg-[#ffffff26] hover:bg-white hover:text-[#444]'
            break;
        default:
            classNames += ' bg-blue-600 hover:bg-white hover:text-blue-700 border-blue-600 border-2 '
            break;
    }
    return (
        <button className={classNames}>
            {label}
        </button>
    )
}

CTA.propTypes = {
    label: PropTypes.string,
    variant: PropTypes.string
}