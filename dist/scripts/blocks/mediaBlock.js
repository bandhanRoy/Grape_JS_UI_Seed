editor.BlockManager.add("Media", {
  id: "media",
  label: `Media`,
  attributes: {
    class: "fa fa-sitemap block-margin",
    title: "Card",
    "data-tooltip-pos": "bottom"
  },
  content: {
    tagName: "div",
    classes: ["media"],
    components: [
      {
        tagName: "img",
        classes: ["align-self-center", "mr-3"],
        attributes: {
          alt: "Generic placeholder image",
          src: "https://dummyimage.com/64X64/ad39ad/fff"
        }
      },
      {
        tagName: "div",
        classes: ["media-body"],
        components: [
          {
            tagName: "h5",
            classes: ["mt-0"],
            content: "Media Block"
          },
          {
            content:
              "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
          }
        ]
      }
    ]
  }
});

editor.BlockManager.add("nested-media", {
  id: "mested-media",
  label: `Nested Media`,
  attributes: {
    class: "fa fa-sitemap block-margin",
    title: "Card",
    "data-tooltip-pos": "bottom"
  },
  content: {
    tagName: "div",
    classes: ["media"],
    components: [
      {
        tagName: "img",
        classes: ["mr-3"],
        attributes: {
          alt: "Generic placeholder image",
          src: "https://dummyimage.com/64X64/ad39ad/fff"
        }
      },
      {
        tagName: "div",
        classes: ["media-body"],
        components: [
          {
            tagName: "h5",
            classes: ["mt-0"],
            content: "Media Block"
          },
          {
            content:
              "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
          },
          {
            tagName: "div",
            classes: ["media", "mt-0"],
            components: [
              {
                tagName: "a",
                classes: ["pr-3"],
                attributes: {
                  href: "#"
                },
                components: [
                  {
                    tagName: "img",
                    attributes: {
                      src: "https://dummyimage.com/64X64/ad39ad/fff",
                      alt: "Generic Image"
                    }
                  }
                ]
              },
              {
                tagName: "div",
                classes: ["media-body"],
                components: [
                  {
                    tagName: "h5",
                    classes: ["mt-0"],
                    content: "Nested Media"
                  },
                  {
                    content:
                      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
});

editor.BlockManager.add("top-aligned-media", {
  id: "top-aligned-media",
  label: `Top Aligned Media`,
  attributes: {
    class: "fa fa-sitemap block-margin",
    title: "Card",
    "data-tooltip-pos": "bottom"
  },
  content: {
    tagName: "div",
    classes: ["media"],
    components: [
      {
        tagName: "img",
        classes: ["align-self-center", "mr-3"],
        attributes: {
          alt: "Generic placeholder image",
          src: "https://dummyimage.com/64X64/ad39ad/fff"
        }
      },
      {
        tagName: "div",
        classes: ["media-body"],
        components: [
          {
            tagName: "h5",
            classes: ["mt-0"],
            content: "Top Aligned Media"
          },
          {
            content:
              "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
          }
        ]
      }
    ]
  }
});

editor.BlockManager.add("center-aligned-media", {
  id: "center-aligned-media",
  label: `Center Aligned Media`,
  attributes: {
    class: "fa fa-sitemap block-margin",
    title: "Card",
    "data-tooltip-pos": "bottom"
  },
  content: {
    tagName: "div",
    classes: ["media"],
    components: [
      {
        tagName: "img",
        classes: ["align-self-center", "mr-3"],
        attributes: {
          alt: "Generic placeholder image",
          src: "https://dummyimage.com/64X64/ad39ad/fff"
        }
      },
      {
        tagName: "div",
        classes: ["media-body"],
        components: [
          {
            tagName: "h5",
            classes: ["mt-0"],
            content: "Center Aligned Media"
          },
          {
            tagName: "p",
            content:
              "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
          },
          {
            tagName: "p",
            classes: ["mb-0"],
            content:
              "Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
          }
        ]
      }
    ]
  }
});

editor.BlockManager.add("bottom-aligned-media", {
  id: "bottom-aligned-media",
  label: `Bottom Aligned Media`,
  attributes: {
    class: "fa fa-sitemap block-margin",
    title: "Card",
    "data-tooltip-pos": "bottom"
  },
  content: {
    tagName: "div",
    classes: ["media"],
    components: [
      {
        tagName: "img",
        classes: ["align-self-end", "mr-3"],
        attributes: {
          alt: "Generic placeholder image",
          src: "https://dummyimage.com/64X64/ad39ad/fff"
        }
      },
      {
        tagName: "div",
        classes: ["media-body"],
        components: [
          {
            tagName: "h5",
            classes: ["mt-0"],
            content: "Top Aligned Media"
          },
          {
            content:
              "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
          },
          {
            tagName: "p",
            classes: ["mb-0"],
            content:
              "Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
          }
        ]
      }
    ]
  }
});
