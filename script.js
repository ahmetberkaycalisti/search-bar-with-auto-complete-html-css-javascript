// const searchWrapper = document.querySelector('.search-input');
// const inputbox = document.querySelector('input');
// const suggbox = document.querySelector('.autocom-box');
// const icon = document.querySelector('.icon');

// let linktag = searchWrapper.querySelector("a");
// let weblink;

// inputbox.onkeyup=(e)=>{
//     let userData = e.target.value;
//     let emptyArray = [];
//     if (userData) {
//         icon.onclick=()=> {
//             weblink="https:www.google.com/search?"+userData;
//             linktag.log(weblink);
//             linktag.click();
//         }
//         emptyArray = suggestions.filter((data)=> {
//             data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
//         });


//         emptyArray = emptyArray.map((data)=> {

//         });
//         searchWrapper.classList.add('active');
//         showSuggestions(emptyArray)
//         let alllist = suggbox.querySelectorAll('li');
//         for (let i = 0; i < alllist.length ; i++) {

//         }
//     } else {
//         searchWrapper.classList.remove('active');
//     }
// }

// function select(elements) {
//     let selectdata = elements.textContent;
//     inputbox.value = selectdata;
//     icon.onclick = () => {
//         weblink="https://www.google.com/search?q="+selectdata;
//         linktag.setAttribute('href', weblink)
//         linktag.click();
//     }

//     searchWrapper.classList.remove("active")
// }

// function showSuggestions(list) {
//     let listData;
//     if(!list.length) {
//         userValue = inputbox.value;
//         listData = '<li>' + userValue+'</li>';
//     } else {
//         listData=list.join('');
//     }

//     suggbox.innerHTML=listData
// }

var topics = suggestions.length;

function show(value) {
    document.getElementById('datalist').innerHTML = "";

    list = value.length

    for (let i = 0; i < topics; i++) {
        if( ( ( suggestions[i].toLowerCase()).indexOf(value.toLowerCase())) > -1 ) {
            var n = document.createElement("option");

            var v = document.createTextNode(suggestions[i]);
            n.appendChild(v);
            document.getElementById('datalist').appendChild(n);
        }
    }
}