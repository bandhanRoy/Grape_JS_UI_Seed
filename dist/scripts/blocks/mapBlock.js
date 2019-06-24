editor.BlockManager.add("map", {
  label: "Map",
  attributes: {
    class: "fa fa-map-o block-margin",
    title: "Map",
    "data-tooltip-pos": "bottom"
  },
  content: {
    type: "map", // Built-in 'map' component
    style: {
      height: "350px"
    },
    removable: false // Once inserted it can't be removed
  }
});
