editor.BlockManager.add("service-address", {
  attributes: {
    class: "gjs-block-section fa fa-address-card",
    title: "Address",
    "data-tooltip-pos": "bottom"
  },
  label: "<h3>Address</h3>",
  content: {
    components: [
      {
        id: "service_address",
        label: "<b>Service Address</b>",
        tagName: "p",
        type: "text",
        content: "City, State, 00000"
      }
    ]
  }
});
