let expressions = []
// Vars
let resultMath = 0
let readline = document.getElementById("readline")
let clearReadline = document.getElementById("clear-readline")
let s_c = document.getElementById("s_(")
let s_cc = document.getElementById("s_)")
let s_sqr = document.getElementById("s_sqr")
let s_pr = document.getElementById("s_%")
let s_pl_or_mi = document.getElementById("+/-")
let s_7 = document.getElementById("s_7")
let s_8 = document.getElementById("s_8")
let s_9 = document.getElementById("s_9")
let s_4 = document.getElementById("s_4")
let s_5 = document.getElementById("s_5")
let s_6 = document.getElementById("s_6")
let s_1 = document.getElementById("s_1")
let s_2 = document.getElementById("s_2")
let s_3 = document.getElementById("s_3")
let s_0 = document.getElementById("s_0")
let point = document.getElementById("point")
let divide = document.getElementById("divide")
let multiply = document.getElementById("multiply")
let minus = document.getElementById("minus")
let plus = document.getElementById("plus")
let equal = document.getElementById("equal")
let resultLine = document.getElementById("result-line")
let resultEqual = document.getElementById("result-equal")
let historyList = document.getElementById("history-list")
let btnHistory = document.getElementById("btn-history")
let btnDelete = document.getElementById("btn-delete")
let expectionsList = document.getElementById("expections-list")
let sings = document.getElementById("btn-sings")

// Functions



function add_symbol(str){
    readline.value += str
}

function add_expression(expression){
    historyList.innerHTML += '<h3>'+ expression +'</h3>'
}


function drow_expections(expections){
    try{
        expections.forEach(exp => {
            expectionsList.innerHTML += `
            <div class="value">
                <h4>${exp[0]}</h4>
                <div class="result-line">
                    <h4>=</h4>
                    <h3 class="yellow">${exp[1]}</h3>
                </div>
            </div>
            `
        });
    }
    catch (err){
        console.log(err)
    }
}




// EventListener

btnHistory.addEventListener("click", ()=>{
    if (btnHistory.classList.contains('active')){
        sings.classList.remove("disactive")
        expectionsList.classList.add("disactive")
        btnHistory.classList.remove("active")
    }
    else{
        drow_expections(expressions)
        sings.classList.add("disactive")
        expectionsList.classList.remove("disactive")
        btnHistory.classList.add("active")
    }

})

readline.addEventListener("input",()=>{
    console.log(readline.value)
})

btnDelete.addEventListener("click", ()=>{
    readline.value = readline.value.slice(0,-1)
    
})
clearReadline.addEventListener("click", ()=>{
    readline.value = ''
})

s_c.addEventListener("click", ()=>{
    add_symbol("(")
})

s_cc.addEventListener("click", ()=>{
    add_symbol(")")
})

s_sqr.addEventListener("click", ()=>{
    add_symbol("√(")
})

s_pr.addEventListener("click", ()=>{
    add_symbol("%")
})

s_pl_or_mi.addEventListener("click", ()=>{
    if (readline.value[0] != "-" && readline.value[1] != "("){
        readline.value = "-(" + readline.value + ")"
    }
    else{
        readline.value = readline.value.slice(2,-1)
    }
})

s_7.addEventListener("click", ()=>{
    add_symbol("7")
})

s_8.addEventListener("click", ()=>{
    add_symbol("8")
})

s_9.addEventListener("click", ()=>{
    add_symbol("9")
})

s_4.addEventListener("click", ()=>{
    add_symbol("4")
})

s_5.addEventListener("click", ()=>{
    add_symbol("5")
})

s_6.addEventListener("click", ()=>{
    add_symbol("6")
})

s_1.addEventListener("click", ()=>{
    add_symbol("1")
})

s_2.addEventListener("click", ()=>{
    add_symbol("2")
})

s_3.addEventListener("click", ()=>{
    add_symbol("3")
})

s_0.addEventListener("click", ()=>{
    add_symbol("0")
})

point.addEventListener("click", ()=>{
    add_symbol(".")
})

divide.addEventListener("click", ()=>{
    add_symbol(" / ")
})

multiply.addEventListener("click", ()=>{
    add_symbol(" * ")
})


plus.addEventListener("click", ()=>{
    add_symbol(" + ")
})

minus.addEventListener("click", ()=>{
    add_symbol(" - ")
})

equal.addEventListener("click", ()=>{
    try{
        
        result = readline.value.replace("√", 'sqrt').replace(",",".").replace("Ans", resultMath)
        resultMath = +math.evaluate(result).toPrecision(7)
        resultLine.textContent = resultMath
        resultEqual.textContent = "="
        add_expression(readline.value)
        expressions.unshift([readline.value, resultMath])
        readline.value = "Ans"
        console.log(+math.evaluate(result).toPrecision(7))
    }
    catch (err){
        resultLine.textContent = "Error"
        console.log(err)
    }
})


