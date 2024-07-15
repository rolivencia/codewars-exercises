// Solution for the 55c0ac142326fdf18d0000af problem in CodeWars: Playing with cubes II (8 kyu)

export class Cube {

    private _side: number;

    public getSide(): number {
        return this._side;
    }

    public setSide(value: number) {
        this._side = Math.abs(value);
    }

    constructor(side: number = 0){
        this._side = Math.abs(side);
    }
}
