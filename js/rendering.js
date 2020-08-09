function render(obj, isPreview) {
    var elements = obj.elements
    var sb = new StringBuffer();
    for (var i in elements) {
        if (elements[i].type=="text") {
            sb.append("<div class='brp-element'><p>"+elements[i].content+"</p></div>")
        } else if (elements[i].type=="quote") {
            sb.append("<div class='brp-element'><blockquote style=\"color:gray\">"+elements[i].content+"</blockquote></div>")
        } else if (elements[i].type=="big-title") {
            sb.append("<div class='brp-element'><h1>"+elements[i].content+"</h1></div>")
        } else if (elements[i].type=="medium-title") {
            sb.append("<div class='brp-element'><h2>"+elements[i].content+"</h2></div>")
        } else if (elements[i].type=="small-title") {
            sb.append("<div class='brp-element'><h3>"+elements[i].content+"</h3></div>")
        }
    }
    return sb.toString()
}

function activeEvents() {
    var es = document.getElementsByClassName("brp-element")
    for (var i = 0; i < es.length; i++) {
        let index = i
        es[i].onclick = function (ev) {
            var el = es[index]
            if (selected == index) {
                el.style.border = "none"
                changeSelected(undefined)
            } else {
                el.style.border = "1px solid black"
                changeSelected(index)
                if (lastSelected!=undefined) {
                    es[lastSelected].style.border = "none"
                }
            }
        }
    }
}
