const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle') //More than one, all brought in as a node list (array)

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++
    //stay at 4
    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

//doesn't go under 1
prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    // loop through circles (array), forEach circle check if index is less than current active. If so add active class onto it.
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    // grabbing all active circles
    const actives = document.querySelectorAll('.active')
    // setting width of progress, -1 as only 3 bar checkpoints between 4 nodes 
    progress.style.width = (actives.length-1)/(circles.length-1) * 100 + '%'

    // if in first position disable previous, if in end position (circles.length) disable next. Else both are available
    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}