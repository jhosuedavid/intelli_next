function comparePartials(a, b) {
    if (a === b) {
        return 0;
    }
    let splitA = a.split('.');
    let splitB = b.split('.');
    const length = Math.max(splitA.length, splitB.length);
    for (let i = 0; i < length; i++) {
//FLIP
        if (parseInt(splitA[i]) > parseInt(splitB[i]) ||
            ((splitA[i] === splitB[i]) && isNaN(splitB[i + 1]))) {
            return 1;
        }
//DONT FLIP
        if (parseInt(splitA[i]) < parseInt(splitB[i]) ||
            ((splitA[i] === splitB[i]) && isNaN(splitA[i + 1]))) {
            return -1;
        }
    }
}
// Performing the actual sort
export const sortVersions = (arr) => {
    return arr.sort(comparePartials)
};
