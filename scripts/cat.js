export const cat = {
    name : "Jess",
    owner : "TBD",
    skin : {
        normal : "./assets/normal.jpg",
        sleep : "./assets/sleeping.jpg",
        eat : "./assets/eating.jpg",
    },
    element : document.createElement('img'),
    width : 50,
    height : 50,
    x : 0,
    y : 0,
    speed: 10,
    show : function(){
        this.element.classList.add("cat");
        this.default();
        document.getElementById("arena").append(this.element);
    },
    default : function(){
        this.element.src = this.skin.normal;
    },
    sleep : function(){
        this.element.src = this.skin.sleep;
    },
    eat : function(){
        this.element.src = this.skin.eat;
    },
    getName : function(){
        return this.name;
    },
    getOwner()
    {
        return this.owner;
    },
    moveRight : function(x = this.speed){
        this.x += x;
        this.element.style.left = `${this.x}px`;
    },
    moveLeft: function(x = this.speed){
        this.x -= x;
        this.element.style.left = `${this.x}px`;
    },
    moveDown: function(y = this.speed){
        this.y += y;
        this.element.style.top = `${this.y}px`;
    },
    moveUp: function(y = this.speed){
        this.y -= y;
        this.element.style.top = `${this.y}px`;
    }
}