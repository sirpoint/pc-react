import PropTypes from 'prop-types';

const NavigationItem = {
    title:"",
    description: "",
    url:"",
    target: "",
}

NavigationItem.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    target: PropTypes.string,
}



export default NavigationItem;