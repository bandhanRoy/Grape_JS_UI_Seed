/**
 * define js for section Block
 */
editor.BlockManager.add("section", {
  id: "section", // id is mandatory
  label: "<h3>Section</h3>",
  attributes: {
    class: "gjs-block-section fa fa-puzzle-piece",
    title: "Section"
  },
  content: `<section>
          <h1>This is a simple title</h1>
          <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
        </section>`
});
