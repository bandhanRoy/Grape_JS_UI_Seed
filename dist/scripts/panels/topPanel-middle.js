/**
 * js for responsive panel devices
 */
editor.Commands.add("set-device-desktop", {
  run: editor => editor.setDevice("Desktop")
});
editor.Commands.add("set-device-mobile", {
  run: editor => editor.setDevice("Mobile")
});
