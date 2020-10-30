function onfieldclick(event) {
    if (event.target.nodeName == "BUTTON"){
        let tgtText=event.target.textContent.trim()
        let outputEl= document.querySelector("#math-output")
        let inputTextEl= document.querySelector(".txtInput")
// debugger
    if (tgtText=="Math-Random"){
        outputEl.textContent = Math.random()*inputTextEl.value
        let itemEl=document.createElement("span")
        itemEl.className = 'item'
        itemEl.textContent = parseFloat(outputEl.textContent).toFixed(3)
        document.querySelector('#items').appendChild(itemEl)
    }
    if (tgtText=="Math-Floor"){
        outputEl.textContent = Math.floor(inputTextEl.value)
    }
    if (tgtText=="Math-Round"){
        outputEl.textContent = Math.round(inputTextEl.value)
    }
    if (tgtText=="Math-Ceil"){
        outputEl.textContent = Math.Ceil(inputTextEl.value)
    }
    if (tgtText=="Math-Absolute"){
        outputEl.textContent = Math.Absolute(inputTextEl.value)
    }
    if (tgtText=="Math-Max"){
        outputEl.textContent = Math.max(inputTextEl.value)
    }
    if (tgtText=="Math-Min"){
        outputEl.textContent = Math.min(inputTextEl.value)
    }

}
}