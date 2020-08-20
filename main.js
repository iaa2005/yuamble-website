/*window.onload = function() {
    let kittie_1 = document.getElementById("kittie-1")
    kittie_1.setAttribute("style", "left: " + document.documentElement.clientWidth * 0.5 + "px; top: " + convertRemToPixels(8) + "px" )
    //console.log(convertRemToPixels(42.5))
    //console.log(convertRemToPixels(8))
    //console.log(document.documentElement.clientWidth)
}
window.onscroll = function () {
    let width_screen = document.documentElement.clientWidth
    let percent = 0
    percent = window.scrollY / screen.height
    let left = 0.5 * width_screen - convertRemToPixels(5) * percent
    let top = convertRemToPixels(8) - convertRemToPixels(5) * percent

    let kittie_1 = document.getElementById("kittie-1")
    kittie_1.setAttribute("style", "left: " + left + "px; top: " + top + "px")
}
*/

window.onload = function () {
    change_onresize_window()

    document.getElementById("down").onclick = function () {
        document.getElementById("body-2").scrollIntoView({block: "start", behavior: "smooth"})
    }
}

function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
}

window.onscroll = function () {
    let opacity = 1 - window.scrollY / convertRemToPixels(9)
    let opacity_ = 1 - window.scrollY / convertRemToPixels(5)

    let logo = document.getElementById("logo-header")
    let logo_text = document.getElementById("logo-text-header")

    let text_1 = document.getElementById("1")
    let text_2 = document.getElementById("2")
    let text_3 = document.getElementById("3")

    logo.setAttribute("style", "opacity: " + opacity)
    logo_text.setAttribute("style", "opacity: " + opacity)

    text_1.setAttribute("style", "opacity: " + opacity_)
    text_2.setAttribute("style", "opacity: " + opacity_)
    text_3.setAttribute("style", "opacity: " + opacity_)

    if (opacity <= 0) {
        logo.setAttribute("style", "display: none")
        logo_text.setAttribute("style", "display: none")
    }

    if (opacity_ <= 0) {
        text_1.setAttribute("style", "display: none")
        text_2.setAttribute("style", "display: none")
        text_3.setAttribute("style", "display: none")
    }

}

window.onresize = function () {
    change_onresize_window()
}

function change_onresize_window() {
    let ill_1 = document.getElementById("ill_1")
    let body_2 = document.getElementById("body-2")
    //let body_1 = document.getElementById("body-1")
    let body_3 = document.getElementById("body-3")
    let body_4 = document.getElementById("body-4")
    let body_5 = document.getElementById("body-5")
    let waitlist_form = document.getElementById("waitlist-form")
    let text_h1_1 = document.getElementById("text-h1")

    let background_ill_1 = document.getElementById("background-ill-2")

    let kittie_1 = document.getElementById("kittie-1")
    let kittie_2 = document.getElementById("kittie-2")
    let ar_place_1 = document.getElementById("ar-place-1")
    let ar_place_2 = document.getElementById("ar-place-2")
    //let ar_place_3 = document.getElementById("ar-place-3")
    let ethermon_1 = document.getElementById("ethermon-1")
    let fire = document.getElementById("fire-2")

    let height_ill_1 = ill_1.clientHeight

    kittie_1.setAttribute("style", "top: " + height_ill_1 * 0.17 + "px;")
    kittie_2.setAttribute("style", "top: " + height_ill_1 * 0.64 + "px;")
    ar_place_1.setAttribute("style", "top: " + height_ill_1 * 0.415 + "px;")
    ar_place_2.setAttribute("style", "top: " + height_ill_1 * 0.66 + "px;")
    //ar_place_3.setAttribute("style", "top: " + height_ill_1 * 0.03 + "px;")
    ethermon_1.setAttribute("style", "top: " + height_ill_1 * 0.19 + "px;")
    fire.setAttribute("style", "top: " + height_ill_1 * 0.25 + "px;")

    background_ill_1.setAttribute("style", "height: " + ill_1.clientHeight + "px;")
    body_2.setAttribute("style", "top: " + (ill_1.clientHeight) + "px;")
    //body_1.setAttribute("style", "height: " + (ill_1.clientHeight) + "px;")
    let top = ill_1.clientHeight + body_2.clientHeight
    let top_body_4 = ill_1.clientHeight + body_2.clientHeight + body_3.clientHeight
    body_3.setAttribute("style", "top: " + top + "px;")
    body_4.setAttribute("style", "top: " + top_body_4 + "px;")
    let top_body_5 = ill_1.clientHeight + body_2.clientHeight + body_3.clientHeight + body_4.clientHeight
    let top_waitlist_form = ill_1.clientHeight + body_2.clientHeight + body_3.clientHeight + body_4.clientHeight + body_5.clientHeight
    body_5.setAttribute("style", "top: " + top_body_5 + "px;")
    waitlist_form.setAttribute("style", "top: " + top_waitlist_form + "px;")
    text_h1_1.setAttribute("style", "font-size: " + height_ill_1 * 0.10 + "px; top: " + height_ill_1 * 0.30 + "px;")

    document.documentElement.style.setProperty("--top-1", height_ill_1 * 0.40 + "px")
    document.documentElement.style.setProperty("--top-2", height_ill_1 * 0.44 + "px")
    //document.documentElement.setAttribute("--top-1", height_ill_1 * 0.40 + "px;")
    //document.documentElement.setAttribute("--top-2", height_ill_1 * 0.46 + "px;")
}