import React, { Component } from 'react';
import PropTypes from 'prop-types';
import imageLoader from './service/image-loader'
import './image.css'


class Image extends Component {



    state = {

    }

    componentDidMount() {
        imageLoader.getImage(this.props.src, this.onLoad, this.onError);
        this.setState({
            src: this.props.placeholder
        });
    }

    onLoad = (params) => {
        this.setState({
            src: this.props.src
        });
    }

    onError = (params) => {

    }

    getContainerStyle() {
        return {
            width: this.props.width,
            height: this.props.height,
            ...this.style
        }
    }

    getImageStyle() {
        return {
            objectFit: this.props.keepAspectRation && this.state.src ? 'contain' : 'cover',
            ...this.props.position
        }
    }

    render() {
        return (
            <div className={`r-image ${this.props.className}`} style={this.getContainerStyle()} >
                <img
                    src={this.state.src}
                    className="r-image__src"
                    alt={this.props.alt}
                    style={this.getImageStyle()}
                />
            </div>
        );
    }
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    alt: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    position: PropTypes.shape({
        display: PropTypes.string,
        top: PropTypes.string,
        left: PropTypes.string,
        bottom: PropTypes.string,
        right: PropTypes.string,
    }),
    keepAspectRation: PropTypes.bool,
    style: PropTypes.string,
    className: PropTypes.string,
}

Image.defaultProps = {
    keepAspectRation: false
}

export default Image;
