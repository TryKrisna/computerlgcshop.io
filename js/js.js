
//    alert("Hello! I am an alert box!!");
   let mo = document.querySelector('#menubars');
    let vis = document.querySelector('#fix');
    let click = document.querySelector('#rclick'); 
   mo.onclick = () =>{
       vis.classList.toggle('active');
    }
click.onclick = () =>{
      vis.classList.remove('active');
  }

// let menu = document.querySelector('#gets');
//     let menu1= document.querySelector('#gets1');
//     let menu2= document.querySelector('#gets2');
  
//     menu.onclick = () =>{
//         menu.classList.toggle('active');
//         menu1.classList.remove('active');
//         menu2.classList.remove('active');
      
//     }