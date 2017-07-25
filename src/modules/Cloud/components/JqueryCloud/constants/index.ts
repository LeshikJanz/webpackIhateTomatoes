const cloudWidth = window.innerWidth / 2;
const cloudHeight = window.innerHeight;

export const tagCloudInitial = `
  <div id="cloud">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 centered center-tag-cloud">
          <div id="CanvasContainer">
            <canvas width="${cloudWidth}px" height="${cloudHeight}px" id="Canvas">
              <p>Anything in here will be replaced on browsers that support the canvas element</p>
            </canvas>
          </div>
          <div id="tags">
            <ul>`;