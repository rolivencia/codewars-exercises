// Solution for the 5970f479e75b6c00ce000043 problem: How can I throw an error here? (2 kyu)

function bang() {
    let E;
    try {
        null.prop;
    } catch (e) {

        E = Object.getPrototypeOf(e.constructor);
    }

    const err = new E("Just th" + "row like this!");

    const f = (function* () { yield; })();
    f.next();
    f["th" + "row"](err);
}