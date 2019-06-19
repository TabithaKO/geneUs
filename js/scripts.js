function breakMaps() {
    var newList = [];
    var DNAlist = [];
    var lines = prompt("Enter a sequence: ");
    var maplength = 3;
    var char = lines.split("");
    var length = char.length;
    for (i = 0; i + maplength < length; i++) {
        var DNAslice = char.slice(i, maplength);
        DNAlist.push(DNAslice);
        maplength += 1;
    }
    var newList = []
    DNAlist.forEach(function (group) {
        var joined = group.join("")
        newList.push(joined)
    })


    function createCounter() {
        dnaCounter = {}
        newList.forEach(function (nucleotide) {
            if (nucleotide in dnaCounter) {
                dnaCounter[nucleotide] = dnaCounter[nucleotide] += 1
            } else {
                dnaCounter[nucleotide] = 1
            }
        })
    }
    return createCounter();
}
