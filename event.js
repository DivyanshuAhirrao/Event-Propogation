let a = document.getElementById('grandparent');
let b = document.getElementById('parent');
let c = document.getElementById('child');


a.addEventListener('click',handleGrandparent=()=>{
    a.style.backgroundColor='yellow';
}, false)

b.addEventListener('click',handleParent=()=>{
    b.style.backgroundColor='chartreuse';
}, false)

c.addEventListener('click',handleParent=()=>{
    c.style.backgroundColor='darkgreen';
}, false)
