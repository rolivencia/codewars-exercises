// Solution for the 5a3dd29055519e23ec000074 problem at CodeWars: Check the exam (7 kyu)

function checkExam(array1, array2) {

    let result = 0;

    for(let i = 0; i<array1.length; i++){
        const rightAnswer = array1[i]
        const studentAnswer = array2[i]

        if(!studentAnswer){
            continue
        }

        if(rightAnswer === studentAnswer){
            result += 4
        } else {
            result -= 1
        }
    }

    return result < 0 ? 0 : result
}