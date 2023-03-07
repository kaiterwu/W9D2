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
    const selectedSpot = JSON.parse(event.target.attributes.pos.value)
    try {
      this.makeMove(selectedSpot);
    }
    catch(err){
      window.alert("Invalid Move")
    }
    const update = new Promise((resolve) => {
      if(true){
        resolve(event.target.innerText = this.game.currentPlayer)
      }
    })

    update.then(setTimeout(() => {
      if (this.game.board.isOver()){
        window.alert(`${this.game.currentPlayer} wins!`)
      }
    }),500)
      
    
   

  }



  


  makeMove(square) {
    
    this.game.playMove(square)
  }

}

module.exports = View;
