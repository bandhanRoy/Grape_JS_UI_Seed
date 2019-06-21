editor.BlockManager.add("card", {
  id: "card",
  attributes: { class: "fa fa-id-card" },
  content: {
    tagName: "div",
    classes: ["col-md-4"],
    components: [
      {
        classes: ["card"],
        components: [
          {
            tagName: "img",
            label: "Image",
            select: true,
            type: "image",
            attributes: { src: "./dist/images/team1.png" },
            activate: true,
            classes: ["card-img-top"]
          },
          {
            classes: ["card-body"],
            components: [
              {
                tagName: "h5",
                classes: ["card-title"],
                type: "text",
                content: "Card Title"
              },
              {
                tagName: "p",
                classes: ["card-text"],
                type: "text",
                content:
                  "Some quick example text to build on the card title and make up the bulk of the cards content."
              },
              {
                tagName: "a",
                attributes: { href: "#" },
                type: "text",
                classes: ["btn", "btn-outline-secondary"],
                content: "Go somewhere."
              }
            ]
          }
        ]
      }
    ]
  }
});
