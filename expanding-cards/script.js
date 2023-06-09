const panels = document.querySelectorAll('.panel')
const heading = document.querySelectorAll('h3')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
    
    let btn = document.getElementById("dark-mode-btn");

    if (btn.textContent === "LIGHTS OFF") {
        btn.textContent = "LIGHTS ON" 
        btn.style.color = "#dad6b0";
    } else {
        btn.textContent = "LIGHTS OFF"
        btn.style.color = "#b7ab2a"
    }
    }


