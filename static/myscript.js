//just a try to make a new branch on git

//fonction repeat: return two strings of html, one to insert in the form
//the other to insert in the table (this one will cal other maths function
//to calculate results every time the form change)

function addrows(n1) { 
    for (i = 0; i < n1; i++) {
        var pics = document.getElementById("try")
        var new1 = document.createElement("input");
        new1.text = "Pic n°" + i
        pics.add(new1)
        console.log("one more", i)
        }
    }

function change3(){ console.log("in change");
    var nb = document.getElementById('pics');
    var n0 = nb.options[nb.selectedIndex].value;
    var n1 = parseInt(n0)
    console.log("nb is:", n1)
    repeat(n1);
    //document.getElementById('pics')appendChild
    return console.log("out chance");
    }

//pass the number of pics you need as x1 from an input tag
function change2(x1) {
    console.log(x1);
    var y = x1.value
    console.log(y);
    var i;
    //delete the previously called <td>
    var tbody1 = document.getElementById("tbody");
    while (tbody1.hasChildNodes()) {
        tbody1.removeChild(tbody1.childNodes[0])  
        }
    console.log("out while");

    
    for(i = 1; i <= y; i++){ console.log("in for"); 
        let table1 = document.getElementById('tbody');
        let table2 = document.createElement("tr");
        table1.appendChild(table2);
        let table3 = document.createElement("th");
        table3.scope = "row";
        table3.innerHTML = i;
        table2.appendChild(table3);
        let table4 = document.createElement('td');
        table4.id = "pic2" + i; 
        table4.placeholder = "pic" + i;
        table4.classname = "form-control";
        table2.appendChild(table4);
        let table5 = document.createElement('input');  //create a <input> node
        table5.type = "number";
        table5.id = "pic" + i;
        //let id5 = "pic" + i;
        //table5.addEventListener("input", TRr(id5))
        table4.appendChild(table5);

        //add the Aplha row
        let alpha1 = document.createElement("th");
        alpha1.scope = "row";
        table2.appendChild(alpha1);
        let alpha2 = document.createElement('td');
        alpha2.id = "alpha1" + i; 
        alpha2.placeholder = "alpha " + i;
        alpha2.classname = "form-control";
        alpha1.appendChild(alpha2);
        let alpha3 = document.createElement('input');  //create a <input> node
        alpha3.type = "number";
        alpha3.id = "Alpha" + i;
        alpha2.appendChild(alpha3);

        //add the TRr row
        let trrow = document.createElement("th");
        trrow.scope = "row";
        table2.appendChild(trrow);
        let trrow2 = document.createElement('td');
        trrow2.id = "TRr" + i; 
        trrow2.placeholder = "TRr" + i;
        trrow2.classname = "form-control";
        trrow2.innerHTML = "XXXX";
        trrow.appendChild(trrow2);

        //add the K' row
        let Krow1 = document.createElement("th");
        Krow1.scope = "row";
        table2.appendChild(Krow1);
        let Krow2 = document.createElement('td');
        Krow2.id = "Kret" + i; 
        Krow2.classname = "form-control";
        Krow2.innerHTML = "Kret" + i;
        Krow1.appendChild(Krow2);

        //add the N row
        let N1 = document.createElement("th");
        N1.scope = "row";
        table2.appendChild(N1);
        let N2 = document.createElement('td');
        N2.id = "N" + i; 
        N2.classname = "form-control";
        N2.innerHTML = "N" + i;
        N1.appendChild(N2);

        //add the s row
        let S1 = document.createElement("th");
        S1.scope = "row";
        table2.appendChild(S1);
        let S2 = document.createElement('td');
        S2.id = "S" + i; 
        S2.classname = "form-control";
        S2.innerHTML = "S" + i;
        S1.appendChild(S2);

        //add the HEPT row
        let HEPT1 = document.createElement("th");
        HEPT1.scope = "row";
        table2.appendChild(HEPT1);
        let HEPT2 = document.createElement('td');
        HEPT2.id = "HEPT" + i; 
        HEPT2.classname = "form-control";
        HEPT2.innerHTML = "HEPT" + i;
        HEPT1.appendChild(HEPT2);
        }

        
    
    for (let k = 1; k <= y; k++) {
        $('#TRr'+k).ready(function () {
            console.log("change from TR" + k);
            $("#pic" + k).change(function () {
                let picpic;
                picpic = 'pic' + k;
                let paramTRr;
                paramTRr = document.getElementById(picpic);
                $("#pic".id).change(TRr(paramTRr, k),Kret(picpic, k), N(k));
                })

        //call N() when N change
        $('#N'+k).ready(function () {
            $("#Alpha" + k).change(function () {
                $("#N"+ k).change(N(k), HEPT(k));
                console.log("Alpha"+k +"changed!")
                });    
            })
        
        $('#S'+k).ready(function () {
            $('#pic'+ k).change(function () {
                $("#S"+ k).change(S(k));
                console.log("Alpha"+k +"changed!")
                });    
            })
        $('#N'+k).ready(function () {
            $('#Lg').change(function () {
                HEPT(k);
                console.log("HEPT called from Lg change");
                });    
            })
            })
        }
    }
function event1(y){ console.log(y)
    for(i = 1; i <= y; i++){
        console.log("in for n°2 "+i+" times, go for pic" + i);
        console.log(document.getElementById("pic" + i).value);
        document.getElementById("pic" + i).addEventListener("change",TRr("pic" + i));
        }
    }

function repeat(x){ 
    console.log("In repeat2!");
    text2 =''; 
    for (i = 0; i < x; i++) {
        //create variables for the id tags and to call functions
        var picnb = i + 1
        var picid = "pic" + picnb
        var alphaid = "alpha" + picnb
        var TRrid = "TRr" + picnb
        var Kretid = "Kret" + picnb
        var Nid = "N" + picnb
        var Sid = "S" + picnb
        var Heptid = "Hept" + picnb
        text2 += 
        `<tr>            <th scope=\\"row\\">${picnb}</th> \
            <td><input type=\\"number\\" class=\\"form-control\\" id= ${picid} \\" placeholder=\ "Pic n°${picnb}" \ onChange = "TRr(\'' ${picid} '\'), Kret(${Kretid}), S(${picnb})" \> \
            <td><input type=\\"number\\" class=\\"form-control\\" id= ${alphaid} \\" placeholder=\ "Pic width" \ onChange = "N(${picnb}), HEPT(${Nid}, 'Lg')" \> \
        </td> <td id=\ "${TRrid}" \"> XXXX</td> \
        <td id=\ "${Kretid}" \"> XXXX</td> \
        <td id=\ "${Nid}" \" > XXXX</td> \
        <td id=\ "${Sid}" \"> XXXX</td> \
        <td id=\ "${Heptid}" \ "> XXXX</td> </tr>`;
        }
    document.getElementById('tbody').innerHTML=text2;
    return text2, console.log("out of repeat2!")
    }

function TRr(x, y) {
    if (x) {
        let Tm = document.getElementById("TM").value;
        console.log("Tm:" + Tm+" y:"+y);
        let TRrx = x.value - Tm
        document.getElementById("TRr" + y).innerHTML = TRrx;
        return console.log("TRrx is" + TRrx)
        }
    else return console.log("Can't get element by id with:" + x);;
}

function Kret(TR, k) { console.log("in Kret")
    TR1 = document.getElementById(TR).value;
    Tm = document.getElementById("TM").value;
    console.log("Tm: " + Tm +"TR1: " + TR1);
    Kret01 = (TR1 - Tm)/Tm;
    document.getElementById("Kret"+k).innerHTML = Kret01;
    return console.log("Kret is" + Kret01);
    }

function N(pic) { 
    console.log("in N()");
    Alpha = document.getElementById("Alpha"+pic).value;
    TR1 = document.getElementById("pic"+pic).value;
    console.log("Tm: " + Tm +"TR1: "+TR1);
    N1 = (5.54 *((TR1 / Alpha)*(TR1 / Alpha)));
    document.getElementById("N"+pic).innerHTML = N1.toFixed(2);
    return console.log("N1 is "+N1)
    }

function S(pic) { console.log("in S()")
    if (document.getElementById("Kret"+(pic - 1)).textContent)
        {
        console.log("if")
        Kret1 = document.getElementById("Kret"+(pic - 1)).textContent;
        Kret1 = parseInt(Kret1)
        Kret2 = document.getElementById("Kret"+pic).textContent;
        Kret2 = parseInt(Kret2)
        console.log("Kret1: " + Kret1 +"Kret2: "+Kret2);
        Sel = Kret1 / Kret2
        document.getElementById("S"+(pic - 1)).innerHTML = Sel.toFixed(2)
        return console.log("Sel: "+Sel.toFixed(2))
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
            document.getElementById("HEPT"+k).innerHTML = H.toFixed(2)
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
