// // nav bar fn click show dropdown
// // to click on menue to show fn and execute each menu 
// "user strict"
// let Linkdrop = document.querySelectorAll(".LinkDrop");
// Linkdrop.forEach(link=>{
//     link.addEventListener('click',(e)=>{
//     e.preventDefault();
//     // console.log("amer");
//     let idValue = link.getAttribute("data-menu");
//     if(idValue !="option menu"){
//     link.style.backgroundImage = "linear-gradient(to right, rgba(245, 0, 87, 0.5), transparent)";
//     link.style.borderLeft = "2px solid #f50057";  // Width, style, and color
//     }
//        document.getElementById(idValue).classList.toggle("show");
//     })
// });
"use strict";
let Linkdrop = document.querySelectorAll(".LinkDrop");
let contentdashbourd= document.querySelector('.content-dashbourd');
let bar = document.querySelector('.bar');
// >>>> array [all classes that have linkdrop tag]
let previousLink = null; // Track the previously clicked link
let previousMenu = null; // Track the previously opened menu
Linkdrop.forEach(link => {
    link.addEventListener('click', (e) => {
        //prevent refresh
        e.preventDefault();
        contentdashbourd.classList.remove("f-width");
        let idValue = link.getAttribute("data-menu");
        // Close the previously opened dropdown menu and reset the link style
        if (previousLink && previousLink !== link) {
            previousLink.style.backgroundImage = "";
            previousLink.style.borderLeft = "";
            if (previousMenu) {
                previousMenu.classList.remove("show");
            }
           
        }
        // Set the style for the currently clicked link >> menu in taskbar [style]
        if (idValue != "option menu"&&idValue != "box1"&&idValue != "box2"&&idValue != "box3"&&idValue != "box4") {
            link.style.backgroundImage = "linear-gradient(to right, rgba(245, 0, 87, 0.5), transparent)";
            link.style.borderLeft = "2px solid #f50057"; // Width, style, and color
        }
        // Toggle the dropdown menu for the current link  [menu open]
        let currentMenu = document.getElementById(idValue);
        currentMenu.classList.toggle("show");
        // Update the previousLink and previousMenu references
        previousLink = link;
        previousMenu = currentMenu;
    });
});
bar.addEventListener('click',function(){
    contentdashbourd.classList.toggle('f-width');
      // Toggle the dropdown menu for the current link  [menu open]
      console.log(previousMenu);
      previousMenu.classList.remove("show");
})

// tabs

let Linktab = document.querySelectorAll('.linkTab');
Linktab.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
let activelink=document.querySelectorAll(".activeLink");
        // Get the id of the tab to be activated
        let idTabs = link.getAttribute('data-areaTab');
        
        // Remove 'active' class from all tab content elements
        Linktab.forEach(item => {
            let tabId = item.getAttribute('data-areaTab');
            document.getElementById(tabId).classList.remove('active');
            
        });
        for(let i =0 ; i <activelink.length;i++){
            activelink[i].classList.remove('activeLink');
        }
        link.classList.add('activeLink');
        console.log(activelink);
        // Add 'active' class to the clicked tab
        document.getElementById(idTabs).classList.add('active');
        console.log(idTabs);
    });
});

//list && grid

let list =document.querySelector('.list');
let GRID =document.querySelector('.grid');
let cards = document.querySelectorAll('.cards');
let boxs =document.querySelectorAll('.boxs');
list.addEventListener('click',(e)=>{
    e.preventDefault();
    cards.forEach(card => {
        card.classList.remove('d-grid');
    });
    boxs.forEach(box => {
        box.classList.remove('d-grid');
    });
})
GRID.addEventListener('click',(e)=>{
    e.preventDefault();
    cards.forEach(card => {
        card.classList.add('d-grid');
    });
    boxs.forEach(box => {
        box.classList.add('d-grid');
    });
})
