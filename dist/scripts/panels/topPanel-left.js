/**
 * js for the panel
 */
editor.Panels.addPanel({
  id: "panel-top",
  el: ".panel__top"
});
editor.Panels.addPanel({
  id: "basic-actions",
  el: ".panel__basic-actions",
  buttons: [
    {
      id: "visibility",
      active: true, // active by default
      className: "btn-toggle-borders",
      label: "<i class='fa fa-square-o'></i>",
      attributes: {
        title: "Block",
        "data-tooltip-pos": "bottom"
      },
      command: "sw-visibility" // Built-in command
    },
    {
      id: "export",
      className: "btn-open-export",
      attributes: {
        title: "Export",
        "data-tooltip-pos": "bottom"
      },
      label: "<i class='fa fa-download'></i>",
      command: "export-template",
      context: "export-template" // For grouping context of buttons from the same panel
    },
    {
      id: "show-json",
      className: "btn-show-json",
      attributes: {
        title: "JSON Viewer",
        "data-tooltip-pos": "bottom"
      },
      label: "{ }",
      context: "show-json",
      command(editor) {
        editor.Modal.setTitle("Components JSON")
          .setContent(
            `<textarea style="width:100%; height: 250px;">
              ${JSON.stringify(editor.getComponents())}
            </textarea>`
          )
          .open();
      }
    },
    {
      id: "download",
      label: "<i class='fa fa-arrow-down'></i>",
      attributes: {
        title: "Download",
        "data-tooltip-pos": "bottom"
      },
      command: "download-template",
      context: "download-template" // For grouping context of buttons from the same panel
    },
    {
      id: "clear",
      label: "<i class='fa fa-trash-o'></i>",
      attributes: {
        title: "Clear Canvas",
        "data-tooltip-pos": "bottom"
      },
      command: "canvas-clear",
      context: "canvas-clear" // For grouping context of buttons from the same panel
    }
  ]
});

editor.Commands.add("download-template", {
  run: editor => editor.runCommand("gjs-export-zip")
});
editor.Commands.add("canvas-clear", function() {
  if (confirm("Are you sure to clean the canvas?")) {
    var comps = editor.DomComponents.clear();
    setTimeout(function() {
      localStorage.clear();
    }, 0);
  }
});
