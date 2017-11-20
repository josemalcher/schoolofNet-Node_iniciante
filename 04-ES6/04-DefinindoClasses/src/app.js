class Color{
    constructor (codeColor , nameColor){
        this.codeColor = codeColor;
        this.nameColor = nameColor;
    };

    getColor(){
        return {
            codeColor:this.codeColor,
            nameColor:this.nameColor
        };
    };
}

let red = new Color("red", "RED(vermelho)");
console.log(red.getColor());