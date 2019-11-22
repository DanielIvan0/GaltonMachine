


class GaltonMachine{
    constructor(x, y, levels){
        this.x = x
        this.y = y
        this.levels = levels
    }

}
class triangle{
    constructor(x, y){
        this.x = x
        this.y = y
    }
}

const setup = () => {
    
}

document.querySelector('button').onclick = {
    setup()
}

window.onload = () => {
    const canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    galton = new GaltonMachine()
    canvas.width = document.querySelector('div').clientHeight
    canvas.height = document.querySelector('div').clientHeight
    ctx.fillRect(0,0,canvas.width, canvas.height)
}