//Part1
//Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");

//Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
var color = "var(--main-bg)";
mainEl.style.backgroundColor = color;

//Set the content of mainEl to <h1>DOM Manipulation</h1>.
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

//Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");

//Part2
//Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById("top-menu");

//Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";

//Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

//Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");


// Part3
// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

//these buttons are going on the nav bar so i have to pull out the nav bar
// const topMenuEl = document.getElementById("top-menu");

menuLinks.forEach(link => {
  const a= document.createElement("a")
  a.setAttribute('href', link.href);
  a.textContent=link.text 
  topMenuEl.appendChild(a);  
}); 

//Part3 
//Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.querySelector("#sub-menu");

// Set the height subMenuEl element to be "100%".
subMenuEl.style.height= "100%";

// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor=" #3da4ab";

// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around")

//Part4
// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks= document.querySelectorAll("a")
// console.log(topMenuLinks)

// Attach a delegated 'click' event listener to topMenuEl.
// format: document.addEventListener('click', handleClick);

topMenuEl.addEventListener('click', (event)=>{
event.preventDefault()  
 
if (event.target.tagName.toLowerCase() !== "a"){
  return;
}else 
 console.log(event.target.textContent)
} ) 

//Part5

e.target.classList.add("active"); //event =e
subMenuEl.forEach(sublinks => {   //building the submenu
  const a= document.createElement("a")
  a.setAttribute('href', sublink.href);
  a.textContent=sublink.text 
  subMenuEl.appendChild(a);  
}); 

subMenuEl.addEventListener('click', (event)=>{
  event.preventDefault()  
   
  if (event.target.tagName.toLowerCase() !== "a"){
    return;
  }else 
  //  console.log(event.target.textContent)
  } ) 

//i tried to follow the directions and got compeletly lost. Then when i tried to upload it, everything is gone. Can you please let me know what i did wrong and what i am missing? 
  


