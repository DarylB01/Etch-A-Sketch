class EtchGame {
  constructor() {
    this.numberOfBoxes = 0;
    this.grid = document.getElementsByClassName("grid")[0];
    this.boxes = [];
    this.isDrawingBlackPressed = false;
    this.isDrawingColorPressed = false;
    this.isEraserPressed = false;
  }

  setBoxNumber = (num) => {
    this.numberOfBoxes = num;
  };

  stopGridEventListeners = () => {
    this.isDrawingBlackPressed = false;
    this.isDrawingColorPressed = false;
    this.isEraserPressed = false;
  };

  generateBoxes = () => {
    this.boxes = [];
    for (
      let index = 0;
      index < this.numberOfBoxes * this.numberOfBoxes;
      index++
    ) {
      let box = document.createElement("div");
      box.className = "box";
      this.boxes.push(box);
    }
  };

  appendToGrid = (el) => {
    this.grid.appendChild(el);
  };

  setGridLayout = () => {
    this.grid.style.gridTemplateColumns = `repeat(${this.numberOfBoxes}, 1fr)`;
  };

  appendAllBoxesToGrid = () => {
    this.boxes.forEach((box) => {
      this.appendToGrid(box);
    });
  };

  turnBoxBlackOnHover = () => {
    this.isDrawingBlackPressed = !this.isDrawingBlackPressed;
    this.grid.addEventListener("mouseover", (e) => {
      if (
        e.target.className.includes("box") &&
        this.isDrawingBlackPressed === true
      ) {
        e.target.className = "box black";
      }
    });
  };

  turnBoxRandomColorOnHover = () => {
    this.isDrawingColorPressed = !this.isDrawingColorPressed;
    let colorChoices = ["red", "green", "blue", "yellow"];
    this.grid.addEventListener("mouseover", (e) => {
      if (
        e.target.className.includes("box") &&
        this.isDrawingColorPressed === true
      ) {
        let color =
          colorChoices[
            Math.floor(Math.random() * Math.floor(colorChoices.length))
          ];
        e.target.className = `box ${color}`;
      }
    });
  };

  eraseBoxColor = () => {
    this.isEraserPressed = !this.isEraserPressed;
    this.grid.addEventListener("mouseover", (e) => {
      if (e.target.className.includes("box") && this.isEraserPressed === true) {
        e.target.className = "box";
      }
    });
  };

  resetAllBoxesColor = () => {
    this.boxes.forEach((box) => {
      if (box.className !== "box") {
        box.className = "box";
      }
    });
  };

  removeAllBoxesFromGrid = () => {
    while (this.grid.firstChild) {
      this.grid.removeChild(this.grid.firstChild);
    }
  };
}

export default EtchGame;
