
function breakMaps(DNA) {
    var newList = [];
    var DNAlist = [];
    var maplength = 3;
    var char = DNA.split("");
    var length = char.length;
    for (i = 0; i + 3 <= length; i++) {
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
$(document).ready(function () {
    var DNA = ""

    $("#file").submit(function (event) {
        event.preventDefault();
        DNA = DNA + document.getElementById("sequence").value
        alert(DNA)
        return (DNA)
    }
    )
    $("#results").click(function () {
        breakMaps(DNA)
        $(".results").text(dnaCounter)
    })

});