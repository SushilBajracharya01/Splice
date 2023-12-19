import PropTypes from 'prop-types';

export default function CTA({ label }) {
    return (
        <button className='uppercase rounded-full px-12 py-3 text-white bg-blue-600 hover:bg-white hover:text-blue-700 transition-colors border-2 border-blue-600 font-medium'>
            {label}
        </button>
    )
}

CTA.propTypes = {
    label: PropTypes.string
}