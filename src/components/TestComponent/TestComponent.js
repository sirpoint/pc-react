import React from 'react';
import PropTypes from 'prop-types';

/** Another simple component to test how react-gen-doc could work with tsx component */
const TestComponent = (props) =>
<div>
    <h1>{props.title}</h1>
    <p>{props.content}</p>
</div>

TestComponent.propTypes = {
    //** TestComponent title */
    title: PropTypes.string,
    //** TestComponent content */
    content: PropTypes.string,
}

export default TestComponent;