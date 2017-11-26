function Fencepost(x, y, postNum) {
	this.name = "post" + postNum;
	this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
  this.sendRopeTo = function(connectedPost) {
    this.connectionsTo.push(connectedPost);
  };
}

// establish post connections
var arr = [post18, post19, post20];
function searchConnections(b,array) {
	for (var k=0; k<array.length; k++) {
  	if (b != array[k] && (b.y + array[k].y) %2 === 0) {
    	b.sendRopeTo(array[k]);
    }
  }
  return b.connectionsTo; 
}

for (var i=0; i<arr.length; i++) {
	searchConnections(arr[i],arr);
}

console.log(post18, post19, post20);
