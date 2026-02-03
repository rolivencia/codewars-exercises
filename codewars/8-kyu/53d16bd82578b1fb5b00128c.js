// Solution for the 53d16bd82578b1fb5b00128c problem at CodeWars: Grader (8 kyu)

function grader(score) {

    if(score > 1){
        return 'F'
    }

    const gradingMap = [
        { minScore: 0.6, grade: 'D' },
        { minScore: 0.7, grade: 'C' },
        { minScore: 0.8, grade: 'B' },
        { minScore: 0.9, grade: 'A' }
    ]

    return gradingMap.reduce((grade, current) => score >= current.minScore ? current.grade : grade, 'F')
}