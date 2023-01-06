import React from 'react';
import pngIcon from 'images/png-file.png';
import svgIcon from 'images/svg-icon.svg';

import './TestImages.scss';

export default () => (
  <>
    <img className="testImage" src={pngIcon} alt="png" />
    <img className="testImage" src={svgIcon} alt="svg" />
  </>
);
