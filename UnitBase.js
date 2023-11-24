export const Vector = function(x,y){
    this.x = x;
    this.y = y;
}

export class UnitBase{
    //hp:int , speed:int , posiiton:Vector2
    //imageSource:image Path
    #hp;
    #speed;
    #position;
    #image;
    #animationHorizontal;
    #animationVertical;
    constructor(hp,speed,position,imagePath){
        this.#hp = hp;
        this.#speed = speed;
        this.#position = position;
        this.#image = imagePath
        this.#animationHorizontal = 1;
        this.#animationVertical = 1;
    }
    constructor(hp,speed,position,imagePath,animationHorizontal,animationVertical){
        this.#hp = hp;
        this.#speed = speed;
        this.#position = position;
        this.#image = imagePath
        this.#animationHorizontal = animationHorizontal;
        this.#animationVertical = animationVertical;
    }

    //애니메이션 로직 추가해야 함
    draw(){
        return imagePath;
    }

}


class orc extends UnitBase{
    
}