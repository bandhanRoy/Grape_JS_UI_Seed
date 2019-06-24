editor.BlockManager.add("service-address", {
  attributes: {
    class: "fa fa-address-card block-margin",
    title: "Address",
    "data-tooltip-pos": "bottom"
  },
  label: "Address",
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
