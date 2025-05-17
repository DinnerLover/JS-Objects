export const cat = {
    name: "Jess",
    coat: "Tuxedo",
    owner: "Ame",
    skin: {
       eat: ".assets/eating.jpg",
       normal: ".assets/normal.jpg",
       sleep: "./assets/sleeping.jpg"
    },
    show: function(){
        this.element.classList.add("cat");
        this.default();
        document.getElementById("arena").append(this.element);
    },
    normal: function () {
        this.element.src = this.skin.normal;
    },
    sleep: function() {
        this.element.src = this.skin.sleep;
    },
    eat: function () {
        this.element.src = this.skin.eat;
    },
    element: document.createElement('img'),
    width: 50,
    height: 50,
    x: 0,
    y: 0,
    speed: 10,
    show: function(){
        this.element.style.cssText = 
                                `
                                    position: absolute,
                                    width: ${this.width}px,
                                    height: ${this.height}px,
                                    top: $[this.y}px,
                                    left:{this.x}px
                                `;
        this.element.src = this.skin.normal;
        document.getElementById("arena").append(this.element);
    },
    getName: ()=>{
        return this.name;
    },
    getOwner() {
        return this.owner;
    },
    moveUp: function(y= this.speed){
        this.y -= y;
        this.element.style.left = `$(this.y)px;`
    },
    moveDown: function(y= this.speed){
        this.y += y;
        this.element.style.left = `$(this.y)px;`
    },
    moveLeft: function(x= this.speed){
        this.x -= x;
        this.element.style.left = `$(this.x)px;`
    },
    moveRight: function(x= this.speed){
        this.x += x;
        this.element.style.left = `$(this.x)px;`
    }
}
import {cat} from "./scripts/cat.js"
export const checkKeyDown = () => {
    document.addEventListener('keydown', e => {
        if (e.key === 'z') {
            cat.sleep();
        } else if (e.key === 'n') {
            cat.default();
        } else if (e.key === 'w') {
            cat.moveUp();
        } else if (e.key === 'a') {
            cat.moveLeft();
        } else if (e.key === 's') {
            cat.moveDown();
        } else if (e.key === 'd') {
            cat.moveRight();
        }
    })
}