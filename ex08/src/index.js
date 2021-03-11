function main(){
    // Only change code bellow this line
    var myX;
    var myY;
    var myZ;

    myX = 12;
    myY = 19;
    myZ = 24;

    myX += 3;
    myY += 17;
    myZ -= 20;
    // Only change code above this line
    return {
        myX,
        myY,
        myZ
    };
  }
  console.log(main()); // change this line
  module.exports = main;