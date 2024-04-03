window.addEventListener("load", function () {
  const $containerGltf = document.querySelector(".container-gltf");
  let rotateX = 60;

  AFRAME.registerComponent("arjs", {
    init: function () {
      this.el.sceneEl.addEventListener("loaded", () => {
        console.log("Model loaded");
      });
    },
  });

  const intervalId = setInterval(function () {
    rotateX += 3;
    $containerGltf.setAttribute("rotation", `${rotateX} 90 -90`);
  }, 50);
});
