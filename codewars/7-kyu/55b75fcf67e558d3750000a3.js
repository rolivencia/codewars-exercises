// Solution for the 55b75fcf67e558d3750000a3 problem at CodeWars: Building blocks

class Block{

    constructor([width, length, height]){
        this.width = width
        this.length = length
        this.height = height
    }

    getWidth(){
        return this.width
    }

    getLength(){
        return this.length
    }

    getHeight(){
        return this.height
    }

    getVolume(){
        return this.width * this.height * this.length
    }

    getSurfaceArea() {
        return 2 * this.width * this.length + 2 * this.width * this.height + 2 * this.height * this.length
    }

}
