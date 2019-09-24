import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import DragRange from "react-drag-range";

import './styles.css';

const containerStyle = { 
    position: 'absolute', 
    zIndex: 1000 
};

const ZoomOutButton = ({ disabled, onClick }) => (
    <button className='iconButton' style={{ margin: '10px' }} onClick={onClick} disabled={disabled}>
        <FontAwesomeIcon icon={faMinus} />
    </button>
);

const ZoomInButton = ({ disabled, onClick }) => (
    <button className='iconButton' style={{ margin: '10px' }} onClick={onClick} disabled={disabled}>
        <FontAwesomeIcon icon={faPlus} />
    </button>
);

const percentForScale = (scale, minScale, maxScale) => {
    return ((scale - minScale) * 100) / (maxScale - minScale);
};

const ZoomButtons = ({scale, minScale, maxScale, onZoomInClick, onZoomOutClick, onZoomSliderChange}) => (
    <div style={containerStyle} className="zoomButtons">
        <ZoomOutButton onClick={onZoomOutClick} disabled={scale <= minScale} />
        <DragRange
            percent
            yAxis
            rate={0.01}
            value={percentForScale(scale, minScale, maxScale)}
            onChange={(value)=> onZoomSliderChange({value})}>
                <div className="zoomSlider">
                    <div className="zoomColor" style={{height:percentForScale(scale, minScale, maxScale)+"%"}} />
                    <div
                        className="zoomScrubber"
                        style={{top: percentForScale(scale, minScale, maxScale)+"%"}}
                    />
                </div>
            </DragRange>
        <ZoomInButton onClick={onZoomInClick} disabled={scale >= maxScale} />
    </div>
);

ZoomButtons.propTypes = {
    scale: PropTypes.number.isRequired,
    minScale: PropTypes.number.isRequired,
    maxScale: PropTypes.number.isRequired,
    onZoomInClick: PropTypes.func.isRequired,
    onZoomOutClick: PropTypes.func.isRequired,
    onZoomSliderChange: PropTypes.func.isRequired
};

export default ZoomButtons;