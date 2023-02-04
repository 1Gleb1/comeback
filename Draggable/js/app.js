window.onload = function () {
  setTimeout(function () {
    document.body.classList.add("loaded");
    Draggable.create(".gallary", {
      bounds: "body",
      inertia: true,
    });
  });
};
