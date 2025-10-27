// Solution for the 55e7280b40e1c4a06d0000aa problem at Codewars: Best travel (5 kyu)

function chooseBestSum(t, k, ls) {
    const subsets = findSubsetsOfLengthK(ls,k);
    const value = subsets.findLast(e => e <= t)
    return subsets.length === 0 || value === undefined ? null : value
}

function findSubsetsOfLengthK(arr, k) {
    const result = [];
    const currentSubset = [];

    function backtrack(startIndex) {
        if (currentSubset.length === k) {
            result
                .push([...currentSubset]
                    .reduce((accum, value) => accum + value, 0))
            return;
        }

        if (startIndex === arr.length || currentSubset.length + (arr.length - startIndex) < k) {
            return;
        }


        currentSubset.push(arr[startIndex]);
        backtrack(startIndex + 1);
        currentSubset.pop();

        backtrack(startIndex + 1);
    }

    backtrack(0);
    return result.sort((a,b) => a - b);
}