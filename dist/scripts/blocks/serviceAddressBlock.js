editor.BlockManager.add("service-address", {
  attributes: { class: "fa fa-address-card" },
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
