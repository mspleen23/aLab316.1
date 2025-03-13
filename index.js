// Part3
// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

  //these buttons are going on the nav bar so i have to pull out the nav bar
  const topMenuEl = document.getElementById("top-menu");
  
  menuLinks.forEach(link => {
    const a= document.createElement("a")
    a.setAttribute('href', link.href);
    a.textContent=link.text 
    topMenuEl.appendChild(a);  
  }); 


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
topMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

//Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

//Part3
