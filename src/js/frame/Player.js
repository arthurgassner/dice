export const Player = function () {
  this.color = "#"+((1<<24)*Math.random()|0).toString(16); // random color
}
