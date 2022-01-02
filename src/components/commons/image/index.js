import React from 'react';
import {shape, any, string} from 'prop-types';
import {Image as ImageRN} from 'react-native';

const Image = (props) => <ImageRN {...props} />;

Image.propTypes = {
    style: shape({}),
    source: any.isRequired,
    resizeMode: string,
};

Image.defaultProps = {
    style: {},
    resizeMode: 'cover',
};

export default Image;
