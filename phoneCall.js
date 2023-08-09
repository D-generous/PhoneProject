let dates = new Date() 
let times = dates.toLocaleTimeString()
time.innerHTML=`${times}`
showTime.innerHTML=`${times}`
showTim.innerHTML=`${times}`
showTimed.innerHTML=`${times}`

function call(){
    document.getElementById("section3").style.display="none"
    document.getElementById("section1").style.display="block"
}
const off =()=>{
    document.getElementById("wall").style.display="block"
    document.getElementById("wall2").style.display="none"
}
const onOff=()=>{
    document.getElementById("wall").style.display="none"
    document.getElementById("wall2").style.display="block"

}

myDigit =[]
const myFunc=(myNumber="Unknown")=>{
    let myArray ={
        myNum: `${myNumber}`
    };
    myDigit.push(myArray)
    document.getElementById("disp").value=""
    displayCaller()
    console.log(`${myNumber}`);
    
    if (disp.value!="") {
        for (let index = 0; index < myDigit.length; index++) {
            add.innerHTML=`
            <button onclick="myAdd(${index})" style="border: 0;" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Number</button> 
            `
            
        }
    }
}

function displayCaller(){
    for (let index = 0; index < myDigit.length; index++) {
        document.getElementById("disp").value+=`${myDigit[index].myNum}`
    }

}


const saveNew=()=>{
    if (fname.value!=""||lname.value!="") {
        alert("SUCCESSFULLY SAVED")
        
    }else{
        alert("Please enter the Contact details")
    }
}

const myDel=(i)=>{
    myDigit.pop()
    console.log(myDigit);
    document.getElementById("disp").value=""
    displayCaller()
}

const myCall=()=>{

    if (document.getElementById("disp").value!="") {
        caller.innerHTML+=document.getElementById("disp").value
        document.getElementById("section1").style.display="none"
        document.getElementById("section2").style.display="block"
        document.getElementById("disp").value=""
        document.getElementById("disp").innerHTML=""
    }
}

const backSpace =()=>{
    document.getElementById("section3").style.display="block"
    document.getElementById("section1").style.display="none"
}
const cutCaller=()=>{
    document.getElementById("caller").innerHTML=""
    document.getElementById("add").innerHTML=""
    document.getElementById("section2").style.display="none"
    document.getElementById("section1").style.display="block"
}

