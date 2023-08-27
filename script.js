const textareaElement = document.getElementById("input")
const remainingEl = document.getElementById("remainig")
const totalcaraterEl = document.getElementById("total-ca")

textareaElement.addEventListener("keyup",()=>{
    updateCounter()
})

const updateCounter =()=>{
    totalcaraterEl.innerText = textareaElement.value.length
    remainingEl.innerText = textareaElement.getAttribute("maxlength") - textareaElement.value.length    
}