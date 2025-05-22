let passbox=document.getElementById("passbox");
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
let numbers=document.getElementById("numbers");
let symbols=document.getElementById("symbols");
let slidervalue=document.getElementById("slidervalue");
let inputslider=document.getElementById("inputslider");
let button=document.getElementById('button');
let copyIcon=document.getElementById('copyIcon');
let upperchars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerchars="abcdefghijklmnopqrstuvwxyz";
let numchars="0123456789";
let symbchars='@#$%^&*()-_';

slidervalue.textContent=inputslider.value;
inputslider.addEventListener('input',()=>{
    slidervalue.textContent=inputslider.value;
})

button.addEventListener('click',()=>{
    passbox.value=generate();
})

function generate(){
    let gen='';
    let allchars='';

    allchars+=lowercase.checked ? lowerchars : '';
    allchars+=uppercase.checked ? upperchars : '';
    allchars+=numbers.checked ? numchars : '';
    allchars+=symbols.checked ? symbchars :'';
     if(allchars == "" || allchars.length == 0){
        return gen;
    }
    let i=1;
    while(i<=inputslider.value){
     gen+=allchars.charAt(Math.floor(Math.random()*allchars.length));
     i++;
    }
    return gen;
}
copyIcon.addEventListener('click',()=>{
    if(passbox.value!='' ||passbox.value.length>=1){
           navigator.clipboard.writeText(passbox.value);
           copyIcon.innerHTML='check';
           copyIcon.title='Password Copied';
           setTimeout(() => {
             copyIcon.innerHTML="content_copy";
             copyIcon.title='';
             passbox.value='';
           }, 3000);
    }
})
