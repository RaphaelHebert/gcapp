//just a try to make a new branch on git

//fonction repeat: return two strings of html, one to insert in the form
//the other to insert in the table (this one will cal other maths function
//to calculate results every time the form change)

//pass the number of pics you need as x1 from an input tag
function change2(x1) {
    var y = x1.value
    var i;

    //delete the previously called <td>
    var tbody1 = document.getElementById("tbody");
    while (tbody1.hasChildNodes()) {
        tbody1.removeChild(tbody1.childNodes[0])  
        }
    
    //Add the rows <td>
    var parameters = ["picnb", "pic", "C", "h", "Alpha"];
    var results = ["TRr","Kret", "LOD","LOQ","S","reso","N", "purnell", "HEPT"];
    for(i = 1; i <= y; i++){ console.log("adding row"+i+" to the results table...");
        let table1 = document.getElementById('tbody');
        let table2 = document.createElement("tr");
        table1.appendChild(table2);
        //append the inputs for parameters
        for(z0 = 0; z0 < parameters.length; z0++) {
            let newtd = document.createElement("td");
            newtd.scope = "row";
            newtd.id = "th" + parameters[z0] + i;
            newtd.style.padding = "0.10rem";
            table2.appendChild(newtd);
            if (z0 == 0){
                    newtd.innerHTML = i;
                    newtd.style.textAlign = "center";
                }
            else {
                let newinput = document.createElement('input');  //create a <input> node
                newinput.type = "float";
                newinput.id = parameters[z0] + i;
                newinput.size = 6;
                newinput.style.length = "100%";
                newinput.style.width = "100%";
                newtd.appendChild(newinput);
                }
            }

        for(z1 = 0; z1 < results.length; z1++) {
            let newtd2 = document.createElement("td");
            if (results[z1] == "reso") {
                newtd2.className = "reso";
            }
            newtd2.scope = "row";
            newtd2.id = results[z1] + i;
            newtd2.innerHTML = results[z1] + i;
            table2.appendChild(newtd2);
            
            }

    // add the action to elements, call functions
    for (let k = 1; k <= y; k++) {
        $('#TRr'+k).ready(function () {
            $("#pic" + k).change(function () {
                let picpic;
                picpic = 'pic' + k;
                let paramTRr;
                paramTRr = document.getElementById(picpic);
                $("#pic".id).change(TRr(paramTRr, k),Kret(picpic, k), N(k), resolution(k));
                })

        $('#LOQ'+k).ready(function () {
            $('#h' + k).change( function () {
                $('#C' + k).change(limites(k))     
                })
            })    

        //call N() when N change
        $('#N'+k).ready(function () {
            $("#Alpha" + k).change(function () {
                $("#N"+ k).change(N(k), HEPT(k), resolution(k), Purnell(k))
                });    
            })

        //call LOQ() & LOD ()when C change
        $('#C'+k).ready(function () {
                $("#C"+ k).change(LOD(k), LOQ(k))   
            })
        
        //call LOQ() & LOD() when h change
        $('#h'+k).ready(function () {
            $("#h"+ k).change(LOD(k), LOQ(k))   
        })

        

        //call resolution() when pic - 1  change
        $('#pic'+(k -1)).ready(function () {
            $("#pic"+ (k - 1)).change(resolution(k))   
        })

        
        
        $('#S'+k).ready(function () { 
            $('#pic'+ k).change(function () { S(k),
                $("#S"+ k).change(S(k));
                });    
            })
        $('#Alpha'+k).ready(function () {
            $('#pic'+k).change(resolution(k), S(k));
            }) 

        $('#N'+k).ready(function () {
            $('#Lg').change(function () {
                HEPT(k); resolution(k); Purnell(k);
                console.log("HEPT called from Lg change");
                });    
            })
            })   

        $("#pic" + k).change(function () {
            let picpic;
            picpic = 'pic' + k;
            var paramTRr;
            paramTRr = document.getElementById(picpic);
            $("#pic".id).change(TRr(paramTRr, k),Kret(picpic, k),S(k), N(k), Purnell(k));
            })   
        }
    }

$('#Lg').change( function () {
    for (let z3 = 1; z3 <= x1.value; z3++) {
        HEPT(z3)}})

$('#TM').change(function () {
    for (let z4 = 1; z4 <= x1.value; z4++) {
        let x5 = document.getElementById('pic' + z4);
        TRr(x5, z4);
        let picpic1;
        picpic1 = 'pic' + z4;
        console.log("go for kret()"+picpic1 + "  "+z4)
        Kret(picpic1, z4);
        S(z4);
        Purnell(z4);
        }
    })

$('#Noise').change(function (){
    for (let z5 = 1; z5 <= x1.value; z5++) {
        limites(z5)
        }
    })

function TRr(x, y) { console.log("in TRr()")
    if (x) {
        let Tm = document.getElementById("TM").value;
        let TRrx = x.value - Tm
        document.getElementById("TRr" + y).innerHTML = TRrx.toFixed(3);
        return console.log("TRrx is" + TRrx +" , TRrx return")
        }
    else return console.log("Can't get element by id with:" + x);;
}

function Kret(TR, k) { 
    console.log("in Kret")
    TR1 = document.getElementById(TR).value;
    console.log(TR1)
    Tm = document.getElementById("TM").value;
    console.log(Tm)
    Kret01 = (TR1 - Tm)/Tm;
    document.getElementById("Kret" + k).innerHTML = Kret01.toFixed(2);
    return console.log("Kret() return");
    }

function N(pic) { 
    console.log("in N()");
    Alpha = document.getElementById("Alpha"+pic).value;
    TR1 = document.getElementById("pic"+pic).value;
    N1 = (5.54 *((TR1 / Alpha) * (TR1 / Alpha)));
    document.getElementById("N"+pic).innerHTML = N1.toFixed(2);
    return console.log("N1() return")
    }

function S(pic) { console.log("in S()");
        try {
        Kret1 = document.getElementById("Kret"+(pic - 1)).textContent;
        Kret1 = parseFloat(Kret1)
        Kret2 = document.getElementById("Kret"+pic).textContent;
        Kret2 = parseFloat(Kret2)
        Sel = Kret2 / Kret1
        if (Sel < 1) {
            Sel = Kret1 / Kret2
            }
        document.getElementById("S"+(pic - 1)).innerHTML = Sel.toFixed(2)
        return console.log("Sel: "+Sel.toFixed(2) + " , S() return")
        }
        catch {
            return;
            }
    }

function HEPT(k) { console.log("in HEPT()")
    let H1;
    H1 = document.getElementById("Lg").value;
    if (H1) {
        console.log("H1 is "+H1)
        H1 = parseInt(H1)
        console.log("H1 is "+H1)
        let H2;
        H2 = document.getElementById("N"+k).textContent;
        if (H1) {
            H2 = parseFloat(H2)
            console.log("H2 is "+H2)
            H = H1 / H2
            console.log("Hept = " + H +"from k="+k)
            document.getElementById("HEPT"+k).innerHTML = H.toFixed(4)
            return console.log("return HEPT function")
            }
        else { 
            document.getElementById("HEPT"+k).innerHTML = "N!"
        }
        }
    else {
        document.getElementById("HEPT"+k).innerHTML = "Lg!"
        }
    }
    
function resolution(x) {
    console.log("in resolution()");
    let NA1;
    try {
        NA1 = document.getElementById("Alpha" + (x - 1)).value;
    }
    catch {
        return;
    }
    let NA2;
    NA2 = document.getElementById("Alpha" + x).value;
    let NK1;
    NK1 = document.getElementById("pic" + (x - 1)).value;
    let NK2;
    NK2 = document.getElementById("pic" + x).value;
    NA2 = parseFloat(NA2)
    NA1 = parseFloat(NA1)
    let res;
    res=1.176 * ((NK2 - NK1)/(NA2 + NA1));
    document.getElementById('reso' + (x - 1)).innerHTML = res.toFixed(4);
    if (res.toFixed(4) < 1) {
        document.getElementById('reso' + (x - 1)).className = "reso2";
        }
    else if (res.toFixed(4) < 1.4) {
        document.getElementById('reso' + (x - 1)).className = "reso3";
        }
    else if (res.toFixed(4) < 1.6) {
        document.getElementById('reso' + (x - 1)).className = "reso4";
        }
    else {
        document.getElementById('reso' + (x - 1)).className = "reso5";
        }
    return console.log("resolution() return");
}

function limites (k) {
    let higth1;
    higth1 = document.getElementById("h" + k).value;
    let noise1;
    noise1 = document.getElementById("Noise").value;
    let rate;
    rate = higth1/noise1;
    let Ck;
    Ck = document.getElementById("C" + k).value;
    let LOD0, LOQ0;
    LOD0 = Ck / ( rate/3);
    LOQ0 = Ck / (rate/10);
    document.getElementById("LOD" + k).innerHTML = LOD0.toFixed(4);
    document.getElementById("LOQ" + k).innerHTML = LOQ0.toFixed(4);
    }
}

function Purnell (k) {
    console.log("Purnell(selectivity, retention factor)" +(k +1))
    try {
        let pur1 = document.getElementById("S" + (k - 1)).textContent;
        pur1 = parseFloat(pur1);
        let pur3 = document.getElementById("Kret" + k).textContent;
        pur3 = parseFloat(pur3);
        let pur4;
        pur4 = document.getElementById("Kret" + (k - 1) ).textContent;
        pur4 = parseFloat(pur4)
        let pur7;
        pur7 = document.getElementById("reso" + (k-1) ).textContent;
        pur7 = parseFloat(pur7)
        let pur5 = (pur3 + pur4) / 2
        let pur6 = pur7/ ((0.25 * ((pur1 - 1) / pur1) * ( pur5 / (1 + pur5))))
        pur6 = pur6 * pur6;
        document.getElementById("purnell" + (k - 1)).innerHTML = pur6.toFixed(0);
    }
    catch {
        return;
    }
}
   
