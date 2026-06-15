const grupos = {

"Grupo A":[
["US","Estados Unidos",3,2,1,0,5,2,"+3",7],
["MX","México",3,2,0,1,4,3,"+1",6],
["CA","Canadá",3,1,1,1,3,4,"-1",4],
["JM","Jamaica",3,0,0,3,1,5,"-4",0]
],

"Grupo B":[
["ES","Espanha",3,3,0,0,7,1,"+6",9],
["JP","Japão",3,2,0,1,5,3,"+2",6],
["MA","Marrocos",3,1,0,2,2,5,"-3",3],
["NZ","Nova Zelândia",3,0,0,3,1,6,"-5",0]
],

"Grupo C":[
["AR","Argentina",3,3,0,0,8,2,"+6",9],
["DK","Dinamarca",3,1,1,1,3,3,"0",4],
["TN","Tunísia",3,0,2,1,2,3,"-1",2],
["SA","Arábia Saudita",3,0,1,2,1,6,"-5",1]
],

"Grupo D":[
["FR","França",3,2,1,0,6,2,"+4",7],
["NL","Holanda",3,1,2,0,4,3,"+1",5],
["SN","Senegal",3,1,0,2,2,4,"-2",3],
["AU","Austrália",3,0,1,2,1,4,"-3",1]
],

"Grupo E":[
["BR","Brasil",3,3,0,0,9,1,"+8",9],
["CH","Suíça",3,2,0,1,5,3,"+2",6],
["RS","Sérvia",3,1,0,2,3,5,"-2",3],
["CM","Camarões",3,0,0,3,1,9,"-8",0]
],

"Grupo F":[
["BE","Bélgica",3,2,1,0,5,2,"+3",7],
["HR","Croácia",3,1,2,0,4,3,"+1",5],
["MA","Marrocos",3,1,1,1,3,3,"0",4],
["CA","Canadá",3,0,0,3,2,6,"-4",0]
],

"Grupo G":[
["PT","Portugal",3,3,0,0,7,1,"+6",9],
["UY","Uruguai",3,2,0,1,4,2,"+2",6],
["KR","Coreia do Sul",3,1,0,2,2,4,"-2",3],
["GH","Gana",3,0,0,3,1,7,"-6",0]
],

"Grupo H":[
["DE","Alemanha",3,2,1,0,6,2,"+4",7],
["CO","Colômbia",3,1,2,0,4,3,"+1",5],
["PL","Polônia",3,1,0,2,3,5,"-2",3],
["CR","Costa Rica",3,0,1,2,1,4,"-3",1]
]

};

const tabela = document.getElementById("tabela");
const titulo = document.getElementById("tituloGrupo");

function carregarGrupo(nome){

titulo.innerHTML = `⭐ ${nome}`;

tabela.innerHTML="";

grupos[nome].forEach((t,index)=>{

let classe="";
let badge="";

if(index<2){
classe="classificado";
badge='<span class="badge oitavas">OITAVAS</span>';
}
else if(index===2){
classe="repescagem";
badge='<span class="badge repe">REPESCAGEM</span>';
}
else{
classe="eliminado";
}

tabela.innerHTML+=`
<tr class="${classe}">
<td>${index+1}</td>

<td class="selecao">
<div class="time">
<strong>${t[0]}</strong>
${t[1]}
${badge}
</div>
</td>

<td>${t[2]}</td>
<td>${t[3]}</td>
<td>${t[4]}</td>
<td>${t[5]}</td>
<td>${t[6]}</td>
<td>${t[7]}</td>
<td>${t[8]}</td>

<td>
${index===0
? `<div class="pts-circle">${t[9]}</div>`
: t[9]}
</td>

</tr>
`;
});

}

document
.querySelectorAll(".tabs button")
.forEach(btn=>{

btn.addEventListener("click",()=>{

document
.querySelectorAll(".tabs button")
.forEach(b=>b.classList.remove("active"));

btn.classList.add("active");

carregarGrupo(btn.textContent);

});

});

carregarGrupo("Grupo A");