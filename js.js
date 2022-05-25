alert("Bienvenue dans la creation de votre cv");
function popup() {
    document.getElementById("popup-2").classList.toggle("active");
}

function chngnum() {
    document.getElementById("popup-3").classList.toggle("active");
}

function chngmail() {
    document.getElementById("popup-4").classList.toggle("active");
}

function chngresum() {
    document.getElementById("popup-5").classList.toggle("active");
}

function addloisir() {
    document.getElementById("popup-6").classList.toggle("active");
}

function addlangue() {
    document.getElementById("popup-7").classList.toggle("active");
}

function expe() {
    document.getElementById("popup-8").classList.toggle("active");
}

function parc() {
    document.getElementById("popup-9").classList.toggle("active");
}

function prgm() {
    document.getElementById("popup-10").classList.toggle("active");
}



function ajout() {
    const nom = document.getElementById("nom")
    const noms = document.getElementById("noms");
    const key = "nom";
    const value = nom.value;
    console.log(key);
    console.log(value);
    if (value) {
        localStorage.setItem(key, value);
        location.reload();
    }
};
const Noms = document.getElementById("noms");
Noms.innerHTML = localStorage.getItem("nom");

function setnum() {
    const num = document.getElementById("num");
    const numero = document.getElementById("numero")
    const key = "num";
    const value = num.value;
    if (value) {
        localStorage.setItem(key, value);
        window.location.reload(true);;
    }
};

const Numero = document.getElementById("numero");
Numero.innerHTML = localStorage.getItem("num");

function setmail() {
    const mail = document.getElementById("mail");
    const email = document.getElementById("email")
    const key = "e-mail";
    const value = mail.value;
    if (value) {
        localStorage.setItem(key, value);
        window.location.reload(true);;
    }
};
const Email = document.getElementById("email");
Email.innerHTML = localStorage.getItem("e-mail");

function setresum() {
    const resum = document.getElementById("resum");
    const resume = document.getElementById("resume")
    const key = "resumer";
    const value = resum.value;
    if (value) {
        localStorage.setItem(key, value);
        window.location.reload(true);;
    }
};


let passage = localStorage.getItem("resumer");
console.log(passage.length);
const Resume = document.getElementById("resume");
const moreresum = document.getElementById("more-text");
let spanresume = " ";
let presume = " ";
for (let i = 0; i <= passage.length; i++) {
    if (i > 200) {
        spanresume += passage[i];
    } else {
        presume += passage[i];
    } 
} 
Resume.innerHTML = presume;
moreresum.innerHTML = spanresume;

document.querySelector("#myFileInput").addEventListener("change", function(){
  const reader = new FileReader();
  reader.addEventListener("load", () =>{
       localStorage.setItem("photo",reader.result);
       window.location.reload(true);
  });   
   reader.readAsDataURL(this.files[0]);
  
});

document.addEventListener("DOMContentLoaded", ()=>{
 const recentImageDataUrl = localStorage.getItem("photo");

  if(recentImageDataUrl) {
      document.querySelector('#imagep').setAttribute("src",recentImageDataUrl);
  }
});

function setloisir(){
   let loisir = document.getElementById("loisir");
    
    let Loisrs = JSON.parse(localStorage.getItem("lrs"));
   let lngth = Loisrs.length;
   let value = loisir.value;
    console.log(value);
    console.log(loisir.value);
    if(value){
    if(lngth === 0)
    {
        Loisrs[0] = loisir.value;
        localStorage.setItem("lrs", JSON.stringify(Loisrs));
        console.log("sucess");
        window.location.reload(true);
    }
    else
    {
         Loisrs[lngth] = loisir.value; 
         localStorage.setItem("lrs", JSON.stringify(Loisrs));
         console.log("sucess");
         window.location.reload(true);
    }
}
}
let output = '';
let tab ;
let listloisir = document.querySelector('#listLoisir');
let Loisrs = JSON.parse(localStorage.getItem("lrs"));
if(Loisrs === null)
{
  tab = [];
}
else
{
    tab = Loisrs;
}
tab.forEach((data, index) => {
    output += `

    <li>${data}</li>
    
    `
});
listLoisir.innerHTML = output;

function setlangue()
{
    langue = document.getElementById("langue");

    let Lngs = JSON.parse(localStorage.getItem("lng"));
    let lngth = Lngs.length;
    let value = langue.value;
     if(value){
     if(lngth === 0)
     {
         Lngs[0] = langue.value;
         localStorage.setItem("lng", JSON.stringify(Lngs));
         console.log("sucess");
         window.location.reload(true);
     }
     else
     {
          Lngs[lngth] = langue.value; 
          localStorage.setItem("lng", JSON.stringify(Lngs));
          console.log("sucess");
          window.location.reload(true);
     }
 }
}

let output1 = '';
let tab1 ;
let listlng1 = document.querySelector('#listlangue');
let lng1 = JSON.parse(localStorage.getItem("lng"));
if(lng1 === null)
{
  tab1 = [];
}
else
{
    tab1 = lng1;
}
tab1.forEach((data, index) => {
    output1 += `

    <li>${data}</li>
    
    `
});
listlangue.innerHTML = output1;


class experience{
    constructor(diplome, year,titre)
    {
        this.diplome = diplome;
        this.year = year;
        this.titre = titre;
    }
}


function setexperience()
{
 let diplome = document.getElementById("diplome");
 let annee = document.getElementById("annee");
 let titre = document.getElementById("titre");

  let exp = JSON.parse(localStorage.getItem("exp"));
  let lngth = exp.length;
  if(lngth === 0)
  {
      exp[0] = new experience(diplome.value,annee.value,titre.value);
      localStorage.setItem("exp", JSON.stringify(exp));
      console.log("sucess");
      window.location.reload(true);
  }
  else
  {
    exp[lngth] = new experience(diplome.value,annee.value,titre.value);
       localStorage.setItem("exp", JSON.stringify(exp));
       console.log("sucess");
       window.location.reload(true);
  }
   
}

let output2 = '';
let tab2 ;
let listexp1 = document.querySelector('#exps1');
let exp1 = JSON.parse(localStorage.getItem("exp"));
if(exp1 === null)
{
  tab2 = [];
}
else
{
    tab2 = exp1;
}
tab2.forEach((data, index) => {
    output2 += `


  <li class="event" data-date="${data.year}">
  <h4 class="mb-3">${data.diplome} - ${data.year}</h4>
  <p>${data.titre}</p>
</li>
    `
});
listexp1.innerHTML = output2;

class parcour
{
    constructor(andebut,anfin,contenu)
    {
      this.andebut = andebut;
      this.anfin = anfin;
      this.contenu = contenu;
    }
}

let prs =[];

function setparcour()
{
    let andebut = document.getElementById("andebut");
    let anfin = document.getElementById("anfin");
    let contenu = document.getElementById("contenu");

    let prs = JSON.parse(localStorage.getItem("prs"));
    let lngth = prs.length;
    if(lngth === 0)
    {
        prs[0] = new parcour(andebut.value,anfin.value,contenu.value);
        localStorage.setItem("prs", JSON.stringify(prs));
        console.log("sucess");
        window.location.reload(true);
    }
    else
    {
         prs[lngth] = new parcour(andebut.value,anfin.value,contenu.value);
         localStorage.setItem("prs", JSON.stringify(prs));
         console.log("sucess");
         window.location.reload(true);
    }
}

let output3 = '';
let tab3 ;
let listexp2 = document.querySelector('#prs1');
let parcs = JSON.parse(localStorage.getItem("prs"));
if(parcs === null)
{
  tab3 = [];
}
else
{
    tab3 = parcs;
}
tab3.forEach((data, index) => {
    output3 += `


    
  <li class="event" data-date="">
  <h4 class="mb-3">${data.andebut}---${data.anfin}</h4>
  <p>${data.contenu}</p>
</li>

    `
});
listexp2.innerHTML = output3;

class competence{
    constructor(lnginfo,niveau){
        this.lnginfo = lnginfo;
        this.niveau = niveau;
    }
}

function setprgm()
{
    let lngprg= document.getElementById("lngprgm");
    let niv = document.getElementById("niv");
    console.log(niv.value);
    console.log(lngprg.value);
    let compet = JSON.parse(localStorage.getItem("comp"));
    let lngth = compet.length;
    if(lngth === 0)
    {
        compet[0] = new competence(lngprg.value, niv.value);
        localStorage.setItem("comp", JSON.stringify(compet));
        console.log("sucess");
        window.location.reload(true);
    }
    else
    {
         compet[lngth] = new competence(lngprg.value, niv.value);
         localStorage.setItem("comp", JSON.stringify(compet));
         console.log("sucess");
         window.location.reload(true);
    }
}

let output4 = '';
let tab4 ;
let listexp3 = document.querySelector('#listcomp');
let compts = JSON.parse(localStorage.getItem("comp"));
if(compts === null)
{
  tab4 = [];
}
else
{
    tab4 = compts;
}
tab4.forEach((data, index) => {
    output4 += `



  <li class="event" data-date="">
  <h4 class="mb-3">${data.niveau}</h4>
  <p>${data.lnginfo}</p>
</li>
    
    `
});
listexp3.innerHTML = output4;
