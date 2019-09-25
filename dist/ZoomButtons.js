"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _reactDragRange = _interopRequireDefault(require("react-drag-range"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var containerStyle = {
  position: 'absolute',
  zIndex: 1000
};

var ZoomOutButton = function ZoomOutButton(_ref) {
  var disabled = _ref.disabled,
      onClick = _ref.onClick;
  return _react.default.createElement("button", {
    className: "iconButton",
    style: {
      margin: '10px'
    },
    onClick: onClick,
    disabled: disabled
  }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faMinus
  }));
};

var ZoomInButton = function ZoomInButton(_ref2) {
  var disabled = _ref2.disabled,
      onClick = _ref2.onClick;
  return _react.default.createElement("button", {
    className: "iconButton",
    style: {
      margin: '10px'
    },
    onClick: onClick,
    disabled: disabled
  }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faPlus
  }));
};

var percentForScale = function percentForScale(scale, minScale, maxScale) {
  return (scale - minScale) * 100 / (maxScale - minScale);
};

var ZoomButtons = function ZoomButtons(_ref3) {
  var scale = _ref3.scale,
      minScale = _ref3.minScale,
      maxScale = _ref3.maxScale,
      onZoomInClick = _ref3.onZoomInClick,
      onZoomOutClick = _ref3.onZoomOutClick,
      onZoomSliderChange = _ref3.onZoomSliderChange;
  return _react.default.createElement("div", {
    style: containerStyle,
    className: "zoomButtons"
  }, _react.default.createElement(ZoomOutButton, {
    onClick: onZoomOutClick,
    disabled: scale <= minScale
  }), _react.default.createElement(_reactDragRange.default, {
    percent: true,
    yAxis: true,
    rate: 0.01,
    value: percentForScale(scale, minScale, maxScale),
    onChange: function onChange(value) {
      return onZoomSliderChange({
        value: value
      });
    }
  }, _react.default.createElement("div", {
    className: "zoomSlider"
  }, _react.default.createElement("div", {
    className: "zoomColor",
    style: {
      height: percentForScale(scale, minScale, maxScale) + "%"
    }
  }), _react.default.createElement("div", {
    className: "zoomScrubber",
    style: {
      top: percentForScale(scale, minScale, maxScale) + "%"
    }
  }))), _react.default.createElement(ZoomInButton, {
    onClick: onZoomInClick,
    disabled: scale >= maxScale
  }));
};

ZoomButtons.propTypes = {
  scale: _propTypes.default.number.isRequired,
  minScale: _propTypes.default.number.isRequired,
  maxScale: _propTypes.default.number.isRequired,
  onZoomInClick: _propTypes.default.func.isRequired,
  onZoomOutClick: _propTypes.default.func.isRequired,
  onZoomSliderChange: _propTypes.default.func.isRequired
};
var _default = ZoomButtons;
exports.default = _default;