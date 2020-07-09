class UserInterface {
  constructor(etchInstance) {
    this.etch = etchInstance;
    this.setGrid = document.querySelector(".button.setgrid");
    this.reset = document.querySelector(".button.reset");
    this.drawBlack = document.querySelector(".button.draw");
    this.erase = document.querySelector(".button.erase");
    this.drawColor = document.querySelector(".button.color");
    this.body = document.body;
  }

  start = () => {
    this.addSetGridFunctionalityToButton();
    this.addResetFunctionalityToButton();
    this.addDrawBlackFunctionalityToButton();
    this.addEraseFunctionaliyToButton();
    this.addDrawColorFunctionalityToButton();
  };

  addSetGridFunctionalityToButton = () => {
    this.setGrid.addEventListener("click", () => {
      let boxes = window.prompt(
        "How many boxes per side for the grid? (max: 100)"
      );
      if (boxes > 100) {
        window.alert("Number is too high! Please try again.");
        return;
      } else if (boxes === null || boxes === "") {
        return;
      } else if (isNaN(boxes)) {
        window.alert("That is not a valid number");
        return;
      }

      this.etch.removeAllBoxesFromGrid();
      this.etch.setBoxNumber(boxes);
      this.etch.generateBoxes();
      this.etch.setGridLayout();
      this.etch.appendAllBoxesToGrid();
    });
  };

  addResetFunctionalityToButton = () => {
    this.reset.addEventListener("click", () => {
      this.etch.resetAllBoxesColor();
    });
  };

  addDrawBlackFunctionalityToButton = () => {
    this.drawBlack.addEventListener("click", () => {
      this.etch.stopGridEventListeners();
      this.etch.turnBoxBlackOnHover();
      this.removeButtonActiveStyles();
      this.setBlackButtonActiveStyle();
      this.body.style.cursor = "url(icons/pencil.png) 2 28, default";
    });
  };

  addEraseFunctionaliyToButton = () => {
    this.erase.addEventListener("click", () => {
      this.etch.stopGridEventListeners();
      this.etch.eraseBoxColor();
      this.removeButtonActiveStyles();
      this.setEraserButtonActiveStyle();
      this.body.style.cursor = "url(icons/eraser.png) 2 28, default";
    });
  };

  addDrawColorFunctionalityToButton = () => {
    this.drawColor.addEventListener("click", () => {
      this.etch.stopGridEventListeners();
      this.etch.turnBoxRandomColorOnHover();
      this.removeButtonActiveStyles();
      this.setDrawColorButtonActiveStyle();
      this.body.style.cursor = "url(icons/brush.png) 2 28, default";
    });
  };

  setDrawColorButtonActiveStyle = () => {
    this.drawColor.className = "button color --active";
  };

  setBlackButtonActiveStyle = () => {
    this.drawBlack.className = "button draw --active";
  };

  setEraserButtonActiveStyle = () => {
    this.erase.className = "button erase --active";
  };

  removeButtonActiveStyles = () => {
    const buttonArray = [this.drawBlack, this.drawColor, this.erase];
    buttonArray.forEach((button) => {
      button.className = button.className.replace("--active", "");
    });
  };
}

export default UserInterface;
