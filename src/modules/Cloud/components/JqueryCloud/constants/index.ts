const headerHeight = 100;
const cloudWidth = window.innerWidth / 1.3;
const cloudHeight = window.innerHeight - 100;

export const tagCloudInitial = `
  <div id="cloud">
    <div>
      <div>
        <div>
          <div id="CanvasContainer">
            <canvas width="${cloudWidth}px" height="${cloudHeight}px"
             style="border-left: 1px dashed #ffffff; border-right: 1px dashed #ffffff;"
              id="Canvas">
              <p>Anything in here will be replaced on browsers that support the canvas element</p>
            </canvas>
          </div>
          <div id="tags">
            <ul>`;