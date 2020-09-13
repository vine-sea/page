

function scro(params){
var c=document.getElementsByClassName('L')
var c2=document.getElementsByClassName('S')
var c3=document.getElementsByClassName('T')
    if(params.scrollY>50){
        log('here')
        
    // c[0].style.visibility='hidden'
    // c[0].style.height= scrollY+30+'px'
    c[0].style.backgroundColor='#1e90ff'
    c[0].style.filter = "grayscale(50%) opcity(90%)";
    c2[0].style.visibility='visible'
    c3[0].style.marginTop= scrollY+25+'px'
    return
    }
    // c[0].style.visibility='visible'
    // c[0].style.height='100px'
    c[0].style.backgroundColor='#70a1ff'
    c2[0].style.visibility='hidden'
    c3[0].style.marginTop= 25+'px'
}

function log(params) {
    console.log(params)
}
log('here')



 
 
