/**
 * define js for section Block
 */
editor.BlockManager.add("section", {
  id: "section", // id is mandatory
  label: "Section",
  attributes: {
    class: "fa fa-puzzle-piece block-margin",
    title: "Section",
    "data-tooltip-pos": "bottom"
  },
  content: `<section>
          <h1>This is a simple title</h1>
          <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
        </section>`
});
