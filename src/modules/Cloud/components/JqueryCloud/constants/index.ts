import { HEADER_HEIGHT } from "modules/DraftEditor/components/plugins/imagePlugin/constants";
const dimension = (window.innerHeight >= window.innerWidth ? window.innerWidth : window.innerHeight) - 2 * HEADER_HEIGHT;
export const dimensionMultiplier = window.innerWidth / window.innerHeight;

export const TAG_CLOUD_INIT = `
  <div id="cloud">
    <div>
      <div>
        <div>
          <div id="CanvasContainer" >
            <canvas width=${dimension * dimensionMultiplier} height=${dimension}
            id="Canvas">
              <p>Anything in here will be replaced on browsers that support the canvas element</p>
            </canvas>
          </div>
          <div id="tags">
            <ul>`;

export const TAG_CLOUD_END = `</ul></div></div></div></div></div>`;