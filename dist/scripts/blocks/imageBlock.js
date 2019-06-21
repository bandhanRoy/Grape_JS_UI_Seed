/***
 * Imgae Block JS goes here
 */
editor.BlockManager.add("image", {
  id: "image",
  attributes: { class: "fa fa-image" },
  // Select the component once it's dropped
  select: true,
  // You can pass components as a JSON instead of a simple HTML string,
  // in this case we also use a defined component type `image`
  content: { type: "image" },
  // This triggers `active` event on dropped components and the `image`
  // reacts by opening the AssetManager
  activate: true
});
