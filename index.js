let ymb_price = document.getElementById("ymb-price"),
    tx_count = document.getElementById("tx-count"),
    value_locked = document.getElementById("value-locked"),
    nodes_count = document.getElementById("nodes-count");

ymb_price.innerText = "$" + String(0);
tx_count.innerText = String(0);
value_locked.innerText = "$" + String(0);
nodes_count.innerText = String(0);

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
