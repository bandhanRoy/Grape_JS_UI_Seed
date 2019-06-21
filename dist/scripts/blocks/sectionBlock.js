/**
 * define js for section Block
 */
editor.BlockManager.add("section", {
  id: "section", // id is mandatory
  attributes: { class: "gjs-block-section fa fa-puzzle-piece" },
  content: `<section>
          <h1>This is a simple title</h1>
          <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
        </section>`
});
