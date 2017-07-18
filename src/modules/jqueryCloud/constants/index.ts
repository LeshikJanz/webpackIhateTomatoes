const cloudWidth = window.innerWidth / 2;
const cloudHeight = window.innerHeight;
export const currentCloudId = "58ee2eb68859711d95b30194";
// export const currentCloudId = "58fbb915a8ca5c187fa5f697";
// export const currentCloudId = "59248baf22be6c02958e08e4";


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
