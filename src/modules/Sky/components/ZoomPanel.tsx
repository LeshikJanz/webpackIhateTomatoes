import * as React from 'react';

const ZOOM_MULTIPLIER = 1.3;

export const ZoomPanel = ( { zoom, handleZoom } ) => (
  <div className="zoom-panel">
    <div>
      <button disabled={zoom >= 10}
              onClick={() => handleZoom(zoom * ZOOM_MULTIPLIER)}>
        <img src="assets/img/Zoom-plus-min.png" alt="Zoom +"/>
      </button>
      <button disabled={zoom <= 0.1}
              onClick={() => handleZoom(zoom / ZOOM_MULTIPLIER)}>
        <img src="assets/img/Zoom-minus-min.png" alt="Zoom -"/>
      </button>
      <button onClick={() => handleZoom(1)}>
        <img src="assets/img/Zoom-reset.png" alt="Reset zoom"/>
      </button>
    </div>
    <h4>Zoom: {zoom.toFixed(1)}</h4>
  </div>
);