import * as React from 'react';

const ZOOM_MULTIPLIER = 1.3;

export const ZoomPanel = ({ zoom, handleZoom }) => (
  <div className="zoom-panel">
    <button onClick={() => handleZoom(zoom * ZOOM_MULTIPLIER)}><img
      src="assets/img/Zoom-plus-min.png" alt="Zoom +"/>
    </button>
    <button onClick={() => handleZoom(zoom / ZOOM_MULTIPLIER)}>
      <img src="assets/img/Zoom-minus-min.png" alt="Zoom -"/>
    </button>
    <button onClick={() => handleZoom(1)}>
      <img src="assets/img/Zoom-reset.png" alt="Reset zoom"/>
    </button>
  </div>
);