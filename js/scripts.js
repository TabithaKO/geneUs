function breakMaps() {
    DNAlist = []
    var lines = prompt("Enter a sequence: ")
    var maplength = 4;
    var char = lines.split("")
    var length = char.length
    for (i = 0; i + maplength < length; i++) {
        var DNAslice = char.slice(i, maplength)
        DNAlist.push(DNAslice)
        maplength += 1
    }
    var newList = []
    DNAlist.forEach(function(group){
        var joined = group.join("")
        newList.push(joined)
    })
    
}
 function createCounter(newList){
    dnaCounter = {}
    newlist.forEach(function(nucleotide){
        if(nucleotide in dnaCounter){
            dnaCounter[nucleotide] = dnaCounter[nucleotide]+= 1
        }else{
            dnaCounter[nucleotide] = 1
        }
        alert(dnaCounter)
    })
}
