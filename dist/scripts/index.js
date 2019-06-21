const editor = grapesjs.init({
  // Indicate where to init the editor. You can also pass an HTMLElement
  container: "#gjs",
  // Get the content for the canvas directly from the element
  // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
  fromElement: true,
  // Size of the editor
  height: "300px",
  width: "auto",
  // Disable the storage manager for the moment
  storageManager: { type: null },
  // Avoid any default panel
  panels: { defaults: [] },
  //Right panel setup
  layerManager: {
    appendTo: ".layers-container"
  },
  blockManager: {
    appendTo: "#blocks"
  },
  // Image Editor Plugin
  plugins: ["grapesjs-tui-image-editor", "grapesjs-plugin-export"],
  pluginsOpts: {
    "grapesjs-tui-image-editor": {
      config: {
        includeUI: {
          initMenu: "filter"
        }
      },
      icons: {
        "menu.normalIcon.path": "../icon-d.svg",
        "menu.activeIcon.path": "../icon-b.svg",
        "menu.disabledIcon.path": "../icon-a.svg",
        "menu.hoverIcon.path": "../icon-c.svg",
        "submenu.normalIcon.path": "../icon-d.svg",
        "submenu.activeIcon.path": "../icon-c.svg"
      }
    },
    "grapesjs-plugin-export": {
      addExportBtn: true,
      btnLabel: "Export to ZIP",
      filenamePfx: "grapesjs_template",
      filename: editor => "my-grapes-template.zip"
    }
  },
  canvas: {
    script: [
      "https://code.jquery.com/jquery-3.2.1.slim.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",
      "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
    ],
    styles: [
      "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
      "./dist/css/style.css",
      "https://use.fontawesome.com/releases/v5.6.3/css/all.css"
    ]
  },
  //js for devices panel
  mediaCondition: "min-width", // default is `max-width`
  deviceManager: {
    devices: [
      {
        name: "Mobile",
        width: "320",
        widthMedia: ""
      },
      {
        name: "Desktop",
        width: "",
        widthMedia: "1024"
      },
      {
        name: "Tablet",
        width: "768",
        widthMedia: ""
      }
    ]
  },

  // We define a default panel as a sidebar to contain layers
  panels: {
    defaults: [
      {
        id: "layers",
        el: ".panel__right",
        // Make the panel resizable
        resizable: {
          maxDim: 350,
          minDim: 200,
          tc: 0, // Top handler
          cl: 1, // Left handler
          cr: 0, // Right handler
          bc: 0, // Bottom handler
          // Being a flex child we need to change `flex-basis` property
          // instead of the `width` (default)
          keyWidth: "flex-basis"
        }
      },
      {
        id: "panel-switcher",
        el: ".panel__switcher",
        buttons: [
          {
            id: "show-layers",
            active: true,
            label: "<i class='fa fa-align-justify'></i>",
            attributes: {
              title: "Show Layers",
              "data-tooltip-pos": "bottom"
            },
            command: "show-layers",
            // Once activated disable the possibility to turn it off
            togglable: false
          },
          {
            id: "show-style",
            active: true,
            label: "<i class='fa fa-css3'></i>",
            attributes: {
              title: "Show Style",
              "data-tooltip-pos": "bottom"
            },
            command: "show-styles",
            togglable: false
          },
          {
            id: "show-traits",
            active: true,
            attributes: {
              title: "Show Traits",
              "data-tooltip-pos": "bottom"
            },
            label: "<i class='fa fa-cog'></i>",
            command: "show-traits",
            togglable: false
          }
        ]
      },
      {
        id: "panel-devices",
        el: ".panel__devices",
        buttons: [
          {
            id: "device-desktop",
            label: "<i class='fa fa-desktop'></i>",
            attributes: {
              title: "Desktop View",
              "data-tooltip-pos": "bottom"
            },
            command: "set-device-desktop",
            active: true,
            togglable: false
          },
          {
            id: "device-tablet",
            label: "<i class='fa fa-tablet'></i>",
            attributes: {
              title: "Tablet View",
              "data-tooltip-pos": "bottom"
            },
            command: "set-device-tablet",
            active: true,
            togglable: false
          },
          {
            id: "device-mobile",
            label: "<i class='fa fa-mobile'></i>",
            attributes: {
              title: "Mobile View",
              "data-tooltip-pos": "bottom"
            },
            command: "set-device-mobile",
            togglable: false
          }
        ]
      }
    ]
  },
  // The Selector Manager allows to assign classes and
  // different states (eg. :hover) on components.
  // Generally, it's used in conjunction with Style Manager
  // but it's not mandatory
  selectorManager: {
    appendTo: ".styles-container"
  },
  styleManager: {
    appendTo: ".styles-container",
    sectors: [
      {
        name: "Dimension",
        open: false,
        // Use built-in properties
        buildProps: ["width", "min-height", "padding", "margin"],
        // Use `properties` to define/override single property
        properties: [
          {
            // Type of the input,
            // options: integer | radio | select | color | slider | file | composite | stack
            type: "integer",
            name: "The width", // Label for the property
            property: "width", // CSS property (if buildProps contains it will be extended)
            units: ["px", "%"], // Units, available only for 'integer' types
            defaults: "auto", // Default value
            min: 0 // Min value, available only for 'integer' types
          }
        ]
      },
      {
        name: "Extra",
        open: false,
        buildProps: ["background-color", "box-shadow", "custom-prop"],
        properties: [
          {
            id: "custom-prop",
            name: "Custom Label",
            property: "font-size",
            type: "select",
            defaults: "32px",
            // List of options, available only for 'select' and 'radio'  types
            options: [
              { value: "12px", name: "Tiny" },
              { value: "18px", name: "Medium" },
              { value: "32px", name: "Big" }
            ]
          }
        ]
      }
    ]
  },
  traitManager: {
    appendTo: ".traits-container"
  }
});
