(function(){
    let w = document.documentElement.clientWidth,
        h = document.documentElement.clientHeight;

    document.body.addEventListener('mousemove', function(evt){
        let posX = Math.round(evt.clientX / w * 25 + 100)
        let posY = Math.round(evt.clientY / h * 25 + 140)
        document.getElementById('logo-image-div1').style.marginTop = String(posY)+'px'
        document.getElementById('logo-image-div1').style.marginLeft = String(posX)+'px'
        posX = Math.round(evt.clientX / w * 50 + 200)
        posY = Math.round(evt.clientY / h * 50 + 160)
        document.getElementById('logo-image-div2').style.marginTop = String(posY)+'px'
        document.getElementById('logo-image-div2').style.marginLeft = String(posX)+'px'
    })
})()