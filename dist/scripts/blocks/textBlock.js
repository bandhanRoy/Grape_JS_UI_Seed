/**
 * Text Block JS Goes Here
 */

editor.BlockManager.add("text", {
  id: "text",
  label: "<h3>Text</h3>",
  attributes: {
    class: "gjs-block-section fa fa-text-height",
    title: "Text",
    "data-tooltip-pos": "bottom"
  },
  content: '<div data-gjs-type="text">Insert your text here</div>'
});
