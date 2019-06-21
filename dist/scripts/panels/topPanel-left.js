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
      command: "sw-visibility" // Built-in command
    },
    {
      id: "export",
      className: "btn-open-export",
      label: "<i class='fa fa-download'></i>",
      command: "export-template",
      context: "export-template" // For grouping context of buttons from the same panel
    },
    {
      id: "show-json",
      className: "btn-show-json",
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
    }
  ]
});
