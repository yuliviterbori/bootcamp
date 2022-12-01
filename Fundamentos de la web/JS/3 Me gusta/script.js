var likes = [9, 12, 9]

function addLike(index){
    likes[index] = likes[index] + 1;
    document.querySelector(`#likecount${index}`).innerText = `${likes[index]} like(s)` 
}