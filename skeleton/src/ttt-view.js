class View {
  constructor(game, theContainer) {
    this.game = game;
    this.theContainer = theContainer;

  }

  setupBoard() {
    let boardCopy = this.game.board
    
    let newUl = document.createElement("ul")
    newUl.classList.add("playgrid")
    boardCopy.grid.forEach(outerArray => {
      outerArray.forEach(innerArray =>{
        let newLi = document.createElement("li")
        newUl.append(newLi)
      })
    })
    this.theContainer.append(newUl)
}
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
