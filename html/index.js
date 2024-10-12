






let close = document.getElementById("close")

function disp(bool) {

    if ( bool === true ) {

        let cont = document.getElementById("cont")

        cont.style.display = "block"

    }else {

        let cont = document.getElementById("cont")

        cont.style.display = "none"

    }

}

close.onclick = function () {

    // let cont = document.getElementById("cont")

    // cont.style.display = "none"

    axios.post(`https://${GetParentResourceName()}/close`, {

        
    
    })

}

disp("V7") ;

let turnoff = document.getElementById("OFF")

turnoff.addEventListener("click",function () {

    axios.post(`https://${GetParentResourceName()}/turnoff`, {

        
    
    })

})

let inter = document.getElementById("inter")

inter.addEventListener("click",function () {

    axios.post(`https://${GetParentResourceName()}/inter`, {

        
    
    })

})

$(document).on('keyup',function(data){

    if(data.which == 27){
        
        $.post(`https://${GetParentResourceName()}/close`, JSON.stringify({}));

        return;

    }

})

let windowFrontLeft = document.getElementById("windowFrontLeft")

windowFrontLeft.addEventListener("click",function () {
    let vl = 0
    axios.post(`https://${GetParentResourceName()}/window`, {

        index : vl
    
    })

})
let windowFrontRight = document.getElementById("windowFrontRight")

windowFrontRight.addEventListener("click",function () {
    let vl = 1
    axios.post(`https://${GetParentResourceName()}/window`, {

        
        index : vl
    })

})
let windowRearLeft = document.getElementById("windowRearLeft")

windowRearLeft.addEventListener("click",function () {
    let vl = 2
    axios.post(`https://${GetParentResourceName()}/window`, {

        index : vl
    
    })

})
let windowRearRight = document.getElementById("windowRearRight")

windowRearRight.addEventListener("click",function () {
    let vl = 3
    
    axios.post(`https://${GetParentResourceName()}/window`, {

        
        index : vl
    })

})




let doorFrontLeft = document.getElementById("doorFrontLeft")

doorFrontLeft.addEventListener("click",function () {
    let vl = 0
    axios.post(`https://${GetParentResourceName()}/opendoor`, {

        index : vl
    
    })

})
let doorFrontRight = document.getElementById("doorFrontRight")

doorFrontRight.addEventListener("click",function () {
    let vl = 1
    axios.post(`https://${GetParentResourceName()}/opendoor`, {

        
        index : vl
    })

})
let doorRearLeft = document.getElementById("doorRearLeft")

doorRearLeft.addEventListener("click",function () {
    let vl = 2
    axios.post(`https://${GetParentResourceName()}/opendoor`, {

        index : vl
    
    })

})
let doorRearRight = document.getElementById("doorRearRight")

doorRearRight.addEventListener("click",function () {
    let vl = 3
    axios.post(`https://${GetParentResourceName()}/opendoor`, {

        
        index : vl
    })

})

let frontHood = document.getElementById("frontHood")

frontHood.addEventListener("click",function () {
    let vl = 4
    axios.post(`https://${GetParentResourceName()}/opendoor`, {

        index : vl
    
    })

})
let rearHood = document.getElementById("rearHood")


rearHood.addEventListener("click",function () {
    let vl = 5
    axios.post(`https://${GetParentResourceName()}/opendoor`, {

        
        index : vl
    })

})


let seatFrontLeft = document.getElementById("seatFrontLeft")

seatFrontLeft.addEventListener("click",function () {
    let vl = -1
    axios.post(`https://${GetParentResourceName()}/set`, {

        index : vl
    
    })

})
let seatFrontrigth = document.getElementById("seatFrontrigth")

seatFrontrigth.addEventListener("click",function () {
    let vl = 0
    axios.post(`https://${GetParentResourceName()}/set`, {

        
        index : vl
    })

})
let seatFrontreLeft = document.getElementById("seatFrontreLeft")

seatFrontreLeft.addEventListener("click",function () {
    let vl = 1
    axios.post(`https://${GetParentResourceName()}/set`, {

        index : vl
    
    })

})
let seatFrontreright = document.getElementById("seatFrontreright")

seatFrontreright.addEventListener("click",function () {
    let vl = 2
    axios.post(`https://${GetParentResourceName()}/set`, {

        
        index : vl
    })


})
window.addEventListener('message', function(event) {

    if ( event.data.type === "ui" ) {

        if ( event.data.bool === true) {

            let cont = document.getElementById("cont")

            cont.style.display = "block"

        }else {

            let cont = document.getElementById("cont")

           
           
            cont.style.display = "none"

        }

    }
    
})

