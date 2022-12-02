var request = 2;
var connections = 418;

function accept(index){
    document.querySelector(`#request${index}`).remove();
    request = request -1;
    connections = connections+1;
    document.querySelector("#request-count").innerText = request;
    document.querySelector("#connections-count").innerText = connections;
}

function onremove(index){
    document.querySelector(`#request${index}`).remove();
    request = request -1;
    document.querySelector("#request-count").innerText = request;
}

function changename(){
    document.querySelector("#name").innerText = "Yuli V";
}