import * as React from 'react';

const ZOOM_MULTIPLIER = 1.3;

export const ZoomPanel = ({ zoom, handleZoom }) => (
  <div className="zoom-panel">
    <img src="assets/img/Zoom-plus-min.png" alt="Zoom +" onClick={() => handleZoom(zoom * ZOOM_MULTIPLIER)}/>
    <img src="assets/img/Zoom-minus-min.png" alt="Zoom -" onClick={() => handleZoom(zoom / ZOOM_MULTIPLIER)}/>
    <img src="assets/img/Zoom-reset.png" alt="Reset zoom" onClick={() => handleZoom(1)}/>
  </div>
);