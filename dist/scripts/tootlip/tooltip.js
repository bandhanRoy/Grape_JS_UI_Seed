$(document).ready(function() {
  // Beautify tooltips
  $("*[title]").each(function() {
    var el = $(this);
    var title = el.attr("title").trim();
    if (!title) return;
    el.attr("data-tooltip", el.attr("title"));
    el.attr("title", "");
  });
});
