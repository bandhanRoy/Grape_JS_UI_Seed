/**
 * Text Block JS Goes Here
 */

editor.BlockManager.add("text", {
  id: "text",
  label: "Text",
  attributes: {
    class: "fa fa-text-height block-margin",
    title: "Text",
    "data-tooltip-pos": "bottom"
  },
  content: '<div data-gjs-type="text">Insert your text here</div>'
});
