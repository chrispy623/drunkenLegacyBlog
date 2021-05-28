//homePAge selectors
let buttons = document.querySelectorAll("button");
let comment = document.querySelector("textarea");
let commentSection = document.querySelector(".addComment");
let button2 = document.querySelector(".submitBtn2");
let commentSection2 = document.querySelector(".addComment2");
let comment2 = document.querySelector(".comment2");
let likeBtn = document.querySelectorAll(".likes");
let likes = document.querySelector(".likeCount");

//homePage event listeners
buttons.forEach(button =>{
  button.addEventListener("click", addComment);
});

likeBtn.forEach(btn =>{btn.addEventListener("click", addLikes)});


//homePage functions

  function addComment(){
  let newDiv = document.createElement("div");
  newDiv.classList.add("comment");
  let newLi = document.createElement("li");
  newLi.innerText = this.previousElementSibling.value;
  newDiv.appendChild(newLi);
  this.parentElement.nextElementSibling.appendChild(newDiv);
};


function addLikes(ev){
let targetInputId = ev.target.getAttribute("data-for");
  let targetInput = document.getElementById(targetInputId);
  targetInput.value = parseInt(targetInput.value) + 1;
}

// about page selectors
const div = document.querySelectorAll(".statement p");

// aboutPageevent listeners
div.forEach((header)=>{
  header.addEventListener("mouseover", showPara);
});
//aboutPage functions
function showPara(e){
  const show = e.target;
  show.classList.toggle("reveal");
}