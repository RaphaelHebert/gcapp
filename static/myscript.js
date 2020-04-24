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

    //add the new <td>
    
    for(i = 1; i <= y; i++){ console.log("in for"); 
        console.log("input n°" + i);
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
        let id5 = "pic" + i;
        //table5.addEventListener("input", TRr(id5))
        table4.appendChild(table5);
        //the listener trigger functions before the DOM is set so the call doc.byId return undefined
        }
        
    for(let k = 1; k <= y; k++){ 
        console.log("in for2 n°" + k);
        $("input").change(
            function () {
                let picpic 
                picpic = 'pic' + k;
                let paramTRr;
                paramTRr = document.getElementById(picpic);
                $("#table5.id").change(TRr(paramTRr)); console.log("in JQuery1" + k); 
                }
            )
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

function TRr(x) {
    console.log("function TRr received:" + x);
        if (x) {
            let Tm = document.getElementById("TM").value;
            console.log("Tm:" + Tm);
            let TRrx = x.value - Tm
            console.log("TRrx:" + TRrx);
            document.getElementById("TRr" + x).innerHTML = TRrx
            return console.log("TRrx is" + TRrx)
            }
        else return console.log("Can't get element by id with:" + x);;
    }

function Kret(TR) { console.log("in Kret")
    TR1 = document.getElementById(TR).value;
    Tm = document.getElementById("TM").value;
    console.log("Tm: " + Tm +"TR1: "+TR1);
    Kret1 = (TR1 - Tm)/Tm
    document.getElementById("Kret"+TR).innerHTML = parseInt(Kret1)
    return console.log("Kret is"+Kret1)
    }

function N(pic) { console.log("in N()")
    Alpha = document.getElementById("alpha"+pic).value
    TR1 = document.getElementById("pic"+pic).value;
    console.log("Tm: " + Tm +"TR1: "+TR1);
    N1 = (5.54 *((TR1 / Alpha)*(TR1 / Alpha)))
    document.getElementById("N"+pic).innerHTML = N1.toFixed(2)
    return console.log("N1 is"+N1)
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

function HEPT(idN,idL) { console.log("in S()")
    N1 = document.getElementById(idN).value;
    N1 = parseInt(N1)
    console.log("N1: " + N1)
    L1 = document.getElementById(idL).textContent;
    L1 = parseInt(N2)
    console.log("N1: " + N1 +"L1: "+L1);
    H = L1 / N1
    console.log("Hept"+idN)
    document.getElementById("Hept"+idN).innerHTML = H.toFixed(2)
    return console.log("H: "+H.toFixed(2))
    }
