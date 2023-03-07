class View {
  constructor(game, theContainer) {
    this.game = game;
    this.theContainer = theContainer;

  }

  setupBoard() {
    let boardCopy = this.game.board
    
    let newUl = document.createElement("ul")
    newUl.classList.add("playgrid")
    boardCopy.grid.forEach((outerArray, i) => {
      outerArray.forEach((innerArray, j) => {
        let newLi = document.createElement("li")
        newLi.setAttribute('pos', `[${i},${j}]`)
        newUl.append(newLi)
      })
    })
    this.theContainer.append(newUl)
}
  
  bindEvents() {
    const thePlaygrid = document.getElementsByClassName('playgrid')[0];

    thePlaygrid.addEventListener("click", (e) => this.handleClick(e));
  }

  handleClick(event) {
    // debugger
    console.log(JSON.parse(event.target.attributes.pos.value))

  }

  makeMove(square) {}

}

module.exports = View;
