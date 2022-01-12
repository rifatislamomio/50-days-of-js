//Longest Consecutive Sequence
const longestConsecutiveSequence = (inputArray) => {
    var maxLen = 0;
    var currLen = 0;
    inputArray = inputArray.sort((a, b) => a - b)
    var set = new Set(inputArray)
    inputArray = [...set];

    for (let i = 1; i < inputArray.length; i++) {
        if (inputArray[i] - inputArray[i - 1] == 1) {
            currLen += 1;
        }
        else {
            if (currLen > maxLen) {
                maxLen = currLen;
            }
            currLen = 0;
        }
    }
    if (currLen > maxLen) {
        maxLen = currLen;
    }

    return maxLen + 1;
}


console.log(longestConsecutiveSequence([100,4,200,1,3,2]));
