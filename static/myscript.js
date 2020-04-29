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
    var results = ["TRr","Kret", "LOD","LOG","S","reso","N", "HEPT"];
    for(i = 1; i <= y; i++){ console.log("adding row"+i+" to the results table...");
        let table1 = document.getElementById('tbody');
        let table2 = document.createElement("tr");
        table1.appendChild(table2);
        //append the inputs for parameters
        for(z0 = 0; z0 < parameters.length; z0++) {
            let newtd = document.createElement("td");
            newtd.scope = "row";
            newtd.id = "th" + parameters[z0] + i;
            table2.appendChild(newtd);
            if (z0 == 0){
                    newtd.innerHTML = i;
                }
            else {
                let newinput = document.createElement('input');  //create a <input> node
                newinput.type = "float";
                newinput.id = parameters[z0] + i;
                newinput.size = 6;
                newtd.appendChild(newinput);
                }
            }

        for(z1 = 0; z1 < results.length; z1++) {
            let newtd2 = document.createElement("td");
            newtd2.scope = "row";
            newtd2.id = parameters[z1] + i;
            newtd2.innerHTML = parameters[z1] + i;
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
                $("#pic".id).change(TRr(paramTRr, k),Kret(picpic, k), N(k));
                })

        $('#LOQ'+k).ready(function () {
            $('#h' + k).change( function () {
                $('#C' + k).change(limites(k))     
                })
            })    

        //call N() when N change
        $('#N'+k).ready(function () {
            $("#Alpha" + k).change(function () {
                $("#N"+ k).change(N(k), HEPT(k), resolution(k))
                });    
            })
        
        $('#S'+k).ready(function () {
            $('#pic'+ k).change(function () {
                $("#S"+ k).change(S(k));
                });    
            })
        $('#Alpha'+k).ready(function () {
            $('#pic'+k).change(resolution(k))
            }) 
        $('#N'+k).ready(function () {
            $('#Lg').change(function () {
                HEPT(k); resolution(k);
                console.log("HEPT called from Lg change");
                });    
            })
            })   

        $("#pic" + k).change(function () {
            let picpic;
            picpic = 'pic' + k;
            let paramTRr;
            paramTRr = document.getElementById(picpic);
            $("#pic".id).change(TRr(paramTRr, k),Kret(picpic, k), N(k));
            })   
        }
    }

function TRr(x, y) { console.log("in TRr()")
    if (x) {
        let Tm = document.getElementById("TM").value;
        let TRrx = x.value - Tm
        document.getElementById("TRr" + y).innerHTML = TRrx.toFixed(3);
        return console.log("TRrx is" + TRrx +" , TRrx return")
        }
    else return console.log("Can't get element by id with:" + x);;
}

function Kret(TR, k) { console.log("in Kret")
    TR1 = document.getElementById(TR).value;
    console.log(TR1)
    Tm = document.getElementById("TM").value;
    console.log(Tm)
    Kret01 = (TR1 - Tm)/Tm;
    document.getElementById("Kret"+k).innerHTML = Kret01.toFixed(3);
    return console.log("Kret() return");
    }

function N(pic) { 
    console.log("in N()");
    Alpha = document.getElementById("Alpha"+pic).value;
    TR1 = document.getElementById("pic"+pic).value;
    N1 = (5.54 *((TR1 / Alpha)*(TR1 / Alpha)));
    document.getElementById("N"+pic).innerHTML = N1.toFixed(2);
    return console.log("N1() return")
    }

function S(pic) { console.log("in S()");
    if (document.getElementById("Kret"+(pic - 1)).textContent)
        {
        Kret1 = document.getElementById("Kret"+(pic - 1)).textContent;
        Kret1 = parseFloat(Kret1)
        Kret2 = document.getElementById("Kret"+pic).textContent;
        Kret2 = parseFloat(Kret2)
        Sel = Kret2 / Kret1
        document.getElementById("S"+(pic - 1)).innerHTML = Sel.toFixed(2)
        return console.log("Sel: "+Sel.toFixed(2) + " , S() return")
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
    NA1 = document.getElementById("Alpha" + (x - 1)).value;
    console.log("NA1 = " + NA1);        
    let NA2;
    NA2 = document.getElementById("Alpha" + x).value;
    console.log("NA2 = " + NA2);
    let NK1;
    NK1 = document.getElementById("pic" + (x - 1)).value;
    console.log("NK1 = " + NK1);
    let NK2;
    NK2 = document.getElementById("pic" + x).value;
    console.log("NK2 = " + NK2);
    NA2 = parseFloat(NA2)
    NA1 = parseFloat(NA1)
    let res;
    res=1.2 * ((NK2 - NK1)/(NA2 + NA1));
    console.log(NK2 - NK1);
    console.log(parseInt(NA2) + parseInt(NA1));
    console.log("res = " + res);
    document.getElementById('reso' + (x - 1)).innerHTML= res.toFixed(4);
    return console.log("resolution() return");
}

function limites (k) {
    console.log("in function limites()")
    let higth1;
    higth1 = document.getElementById("h" + k).value;
    console.log("higth1 = " + higth1)
    let noise1;
    noise1 = document.getElementById("Noise").value;
    console.log("noise1 = " + noise1)
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
