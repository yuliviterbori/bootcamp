var mesure = 'C'
const cel = [{min: 18, max: 24}, {min: 19, max: 27}, {min: 16, max: 21}, {min: 21, max: 26}]
const far = [{min: 64, max: 75}, {min: 66, max: 80}, {min: 60, max: 21}, {min: 70, max: 79}]

function closeCookie(){
    document.querySelector('#cookie-box').remove()
}

function chooseUnit(e){
    mesure = e.value;
    arr = [...far];
    if(mesure === "C"){
        arr = [...cel]
    }
    for(i=0;i<arr.length;i++){
        document.querySelector(`#min-${i}`).innerText = arr[i].min+"º";
        document.querySelector(`#max-${i}`).innerText = arr[i].max+"º";
    }
}