var domComps = editor.DomComponents;
var dType = domComps.getType("default");
var dModel = dType.model;
var dView = dType.view;

domComps.addType("input", {
  model: dModel.extend(
    {
      defaults: Object.assign({}, dModel.prototype.defaults, {
        traits: [
          // strings are automatically converted to text types
          "name",
          "placeholder",
          {
            type: "select",
            label: "Type",
            name: "type",
            options: [
              { value: "text", name: "Text" },
              { value: "email", name: "Email" },
              { value: "password", name: "Password" },
              { value: "number", name: "Number" }
            ]
          },
          {
            type: "checkbox",
            label: "Required",
            name: "required"
          }
        ]
      })
    },
    {
      isComponent: function(el) {
        if (el.tagName == "INPUT") {
          return { type: "input" };
        }
      }
    }
  ),

  view: dView
});
