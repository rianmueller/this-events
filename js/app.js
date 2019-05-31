//Secret Menu Challenge
//Add event listeners to the following:

/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var navBox = document.getElementsByClassName('navi');

for(i = 0; i < navBox.length; i++){
    navBox[i].addEventListener('click', showHideContents)
}

function showHideContents(){
    var navElem = this.querySelector('.inner')
    if(navElem.style.display == 'inline'){
        navElem.style.display = 'none'
    }else{
        navElem.style.display = 'inline'
    }
}

/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/



// var h2Elem = document.getElementsByClassName('name');
// console.log(h2Elem);

// for(var i = 0; i < h2Elem.length; i++){
//     console.log(h2Elem[i])
// }

/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/



