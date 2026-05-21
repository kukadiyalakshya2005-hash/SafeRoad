function showMessage(){

alert(
"Always Follow Traffic Rules 🚦"
);

}



const ctx=
document
.getElementById(
"myChart"
);



new Chart(ctx,{

type:"pie",

data:{

labels:[

"Over Speed",

"Mobile",

"Signal",

"Drunk"

],

datasets:[{

data:[40,20,15,25]

}]

}

});