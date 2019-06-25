export default (editor, config) => {
  const bm = editor.BlockManager;
  const toAdd = name => config.blocks.indexOf(name) >= 0;

  toAdd("link-block") &&
    bm.add("link-block", {
      category: "Basic",
      label: "Link Block",
      attributes: { class: "fa fa-link" },
      content: {
        type: "link",
        editable: false,
        droppable: true,
        style: {
          display: "inline-block",
          padding: "5px",
          "min-height": "50px",
          "min-width": "50px"
        }
      }
    });

  toAdd("quote") &&
    bm.add("quote", {
      label: "Quote",
      category: "Basic",
      attributes: { class: "fa fa-quote-right" },
      content: `<blockquote class="quote">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
      </blockquote>`
    });

  toAdd("text-basic") &&
    bm.add("text-basic", {
      category: "Basic",
      label: "Text section",
      attributes: { class: "gjs-fonts gjs-f-h1p" },
      content: `<section class="bdg-sect">
      <h1 class="heading">Insert title here</h1>
      <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </section>`
    });

  toAdd("tables") &&
    bm.add("tables", {
      category: "Tables",
      label: "Tables Section",
      attributes: { class: "fa fa-table fa-5x" },
      content: `<table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </table>`
    });

  toAdd("row") &&
    bm.add("row", {
      category: "Tables",
      label: "Table Cell",
      attributes: { class: "fa fa-minus fa-2x" },
      content: `<table class="table">
      <tr>
          <td>Mark</td>s
        </tr>
    </table>`
    });

  toAdd("alerts") &&
    bm.add("alerts", {
      category: "Alerts",
      label: "Alert",
      attributes: { class: "fa fa-exclamation-triangle fa-2x" },
      content: `<div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>`
    });

  toAdd("heading-badge") &&
    bm.add("heading-badge", {
      category: "Badges",
      label: "Heading Badge",
      attributes: { class: "fa fa-certificate fa-2x" },
      content: `<div>Example heading <span class="badge badge-secondary">New</span></div>`
    });

  toAdd("notification-badge") &&
    bm.add("notification-badge", {
      category: "Badges",
      label: "Notification Badge",
      attributes: { class: "fa fa-certificate fa-2x" },
      content: `<button type="button" class="btn btn-primary">
      Notifications <span class="badge badge-light">4</span>
    </button>`
    });

  toAdd("profile-badge") &&
    bm.add("profile-badge", {
      category: "Badges",
      label: "Profile Badge",
      attributes: { class: "fa fa-certificate fa-2x" },
      content: `<button type="button" class="btn btn-primary">
      Profile <span class="badge badge-light">9</span>
      <span class="sr-only">unread messages</span>
    </button>`
    });

  toAdd("badge") &&
    bm.add("badge", {
      category: "Badges",
      label: "Badge",
      attributes: { class: "fa fa-certificate fa-2x" },
      content: `<span class="badge badge-primary">Primary</span>`
    });

  toAdd("pill-badge") &&
    bm.add("pill-badge", {
      category: "Badges",
      label: "Pill Badge",
      attributes: { class: "fa fa-certificate fa-2x" },
      content: `<span class="badge badge-pill badge-primary">Primary</span>`
    });

  toAdd("link-badge") &&
    bm.add("link-badge", {
      category: "Badges",
      label: "Link Badge",
      attributes: { class: "fa fa-certificate fa-2x" },
      content: `<a href="#" class="badge badge-primary">Primary</a>`
    });

  toAdd("breadcrumbs") &&
    bm.add("breadcrumbs", {
      category: "Breadcrumb",
      label: "Breadcrumb",
      attributes: { class: "fa fa-eraser fa-2x" },
      content: `<nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <li class="breadcrumb-item active" aria-current="page">Data</li>
      </ol>
    </nav>`
    });

  toAdd("buttons") &&
    bm.add("buttons", {
      category: "Buttons",
      label: "Button",
      attributes: { class: "fa fa-window-minimize fa-2x" },
      content: `<button type="button" class="btn btn-primary">Primary</button>`
    });

  toAdd("outline-buttons") &&
    bm.add("outline-buttons", {
      category: "Buttons",
      label: "Outline Button",
      attributes: { class: "fa fa-window-minimize fa-2x" },
      content: `<button type="button" class="btn btn-outline-primary">Primary</button>`
    });

  toAdd("button-group") &&
    bm.add("button-group", {
      category: "Buttons",
      label: "Button Group",
      attributes: { class: "fa fa-window-minimize fa-2x" },
      content: `<div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-secondary">Left</button>
      <button type="button" class="btn btn-secondary">Middle</button>
      <button type="button" class="btn btn-secondary">Right</button>
    </div>`
    });

  toAdd("card") &&
    bm.add("card", {
      category: "Card",
      label: "Card",
      attributes: { class: "fa fa-id-card fa-2x" },
      content: `<div class="card" style="width: 18rem;">
      <img src="https://dummyimage.com/200x200/000/fff" class="card-img-top" alt="https://dummyimage.com/200x200/000/fff">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`
    });

  toAdd("card-list") &&
    bm.add("card-list", {
      category: "Card",
      label: "Card List",
      attributes: { class: "fa fa-id-card fa-2x" },
      content: `<div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>`
    });

  toAdd("kitchen-sink") &&
    bm.add("kitchen-sink", {
      category: "Card",
      label: "Kitchen Sink",
      attributes: { class: "fa fa-id-card fa-2x" },
      content: `<div class="card" style="width: 18rem;">
      <img src="https://dummyimage.com/200x200/000/fff" class="card-img-top" alt="https://dummyimage.com/200x200/000/fff">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>`
    });

  toAdd("card-nav") &&
    bm.add("card-nav", {
      category: "Card",
      label: "Card Navigation",
      attributes: { class: "fa fa-id-card fa-2x" },
      content: `<div class="card text-center">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    Active`
    });

  toAdd("carousal") &&
    bm.add("carousal", {
      category: "Carousal",
      label: "Carousal",
      attributes: { class: "fa fa-picture-o fa-2x" },
      content: `<div class="bd-example">
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://dummyimage.com/200x200/000/fff" class="d-block w-100" alt="https://dummyimage.com/200x200/000/fff">
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://dummyimage.com/200x200/cccc/fff" class="d-block w-100" alt="https://dummyimage.com/200x200/000/fff">
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://dummyimage.com/200x200/ddeff/fff" class="d-block w-100" alt="https://dummyimage.com/200x200/000/fff">
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>`
    });

  toAdd("collapse") &&
    bm.add("collapse", {
      category: "Collapse",
      label: "Collpase Button",
      attributes: { class: "fa fa-window-restore fa-2x" },
      content: `<p>
      <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        Link with href
      </a>
      <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        Button with data-target
      </button>
    </p>
    <div class="collapse" id="collapseExample">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>`
    });

  toAdd("collapse-group") &&
    bm.add("collapse-group", {
      category: "Collapse",
      label: "Collpase Group",
      attributes: { class: "fa fa-window-restore fa-2x" },
      content: `<p>
      <a class="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
      <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
      <button class="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
    </p>
    <div class="row">
      <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample1">
          <div class="card card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
      </div>
      <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample2">
          <div class="card card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
      </div>
    </div>`
    });

  toAdd("dropdown") &&
    bm.add("dropdown", {
      category: "Dropdown",
      label: "Dropdown",
      attributes: { class: "fa fa-caret-down fa-2x" },
      content: `<div class="btn-group">
      <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Action
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
      </div>
    </div>`
    });
};
