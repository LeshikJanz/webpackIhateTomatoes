const dimension = (window.innerHeight >= window.innerWidth ? window.innerWidth : window.innerHeight) - 220;

export const TAG_CLOUD_INIT = `
  <div id="cloud">
    <div>
      <div>
        <div>
          <div id="CanvasContainer">
            <canvas width=${dimension} height=${dimension}
            id="Canvas">
              <p>Anything in here will be replaced on browsers that support the canvas element</p>
            </canvas>
          </div>
          <div id="tags">
            <ul>`;

export const TAG_CLOUD_END = `</ul></div></div></div></div></div>`;