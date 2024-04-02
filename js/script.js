AFRAME.registerComponent("arjs", {
  init: function () {
    this.el.sceneEl.addEventListener("loaded", () => {
      console.log("Model loaded");
    });
  },
});
