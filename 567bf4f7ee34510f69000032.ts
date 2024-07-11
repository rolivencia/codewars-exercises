// Solution for the 567bf4f7ee34510f69000032 problem in CodeWars: Regexp Basics - is it a digit? (8 kyu)

interface String {    // Necessary, keep it here.
    digit(): boolean;
}

String.prototype.digit = function(): boolean {

    if(this.length > 1){
        return false;
    }

    return /^\d+$/.test(this.toString());
};
