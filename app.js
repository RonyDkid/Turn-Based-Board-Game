let row = document.querySelector('.row');
let fields = document.getElementsByClassName('col-md-2')
let fieldsArr = Array.from(fields);
let header = document.getElementById("clicked");
let cols = header.getElementsByClassName("col-md-2");
let player = document.getElementById('player');
let player2 = document.getElementById('player2');
let blockedField = document.getElementsByClassName('blocked');




fieldsArr.sort(function() {
  return 0.5 - Math.random();
}).forEach(function(el) {

  row.appendChild(el);
});

// ADD AN EVENT LISTENER AND LISTEN FOR COLS ID
function replyClick(e){
  e = e || window.event;
  e = e.target || e.srcElement;
  if (e.nodeName === 'DIV'){
    let changable = e.id;
    //console.log(changable);
  }
}
// CREATE A 2D ARRAY (MAP)
var map = [];
while(fieldsArr.length) map.push(fieldsArr.splice(0,6));

// ON CLICK ADD A CLASS OF ACTIVE
for (var i = 0; i < cols.length; i++) {
  cols[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// MOVE PLAYER ONE ACROSS THE MAP
function movePlayer(multWidth, multHeight){
  $(".active").append(player);
  if((row).click > multWidth){
    alert(1)
  }
  
}

// MOVE PLAYER 2 ACROSS THE MAP
function movePlayer2(){
  $(".active").append(player2);
}

// MAKE GRAYED OUT FIELD UNAVALIABLE AND SHOW AN ALERT
$(blockedField).css("pointer-events","none");


// APPEND PLAYER1(2) TO THE FIRST(LAST) FIELD ON THE MAP
map[0][0].appendChild(player);
map[5][5].appendChild(player2);



// GET PLAYERS CURRENT POSITION


$(row).click(function(){
  let current = player.offsetTop;
  


});


 const widthAllowed = 3 * 156;
 const heightAllowed = 3 * 146;


// LIMIT PLAYER MOVES
let player1Moves = 3;
    player2Moves = 3;

  $(row).click(function(){
  movePlayer();
  let remainingMoves = player1Moves -= 1;
  if (remainingMoves === 0){
    alert("You don't have any more moves. Player's 2 turn.");
    $(player).css("pointer-events","none");

    $(row).click(movePlayer2);
  }
})


 for(var x = 0; x < map.length; x++) {
   for(var y = 0; y < map[x].length; y++) {
     console.log(map[x]);
  }
 }




 console.log(map);
 console.log(map[2][5]);

 









