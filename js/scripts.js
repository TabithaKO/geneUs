var DNAlist = [];
var DNA = "";
var sortedObj = [];
var topCodons = [];
var chartMaker = {};
function breakMaps(DNA) {
    var newList = [];
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
        var joined = group.join("");
        newList.push(joined);
    })

    function createCounter() {
        dnaCounter = {};
        newList.forEach(function (nucleotide) {
            if (nucleotide in dnaCounter) {
                dnaCounter[nucleotide] = dnaCounter[nucleotide] += 1;
            } else {
                dnaCounter[nucleotide] = 1;
            }
        })
    }
    return createCounter();

} 
function sort(){
    breakMaps(DNA)
    for (key in dnaCounter){ 
        sortedObj.push([key, dnaCounter[key]]);
    }
    sortedObj.sort(function(a, b) {
        return b[1] - a[1];
    });
    function topTen(){
        sortedObj.forEach(function(codon){  
     if(sortedObj.indexOf(codon) < 10){ 
         topCodons.push(codon)
     }
        })
        topCodons.forEach(function(codon){
            chartMaker[codon[0]] = codon[1]
            })
            return (chartMaker)
     }
   return (topTen()) 

}


function sickleCell() {
    breakMaps(DNA);
    var map = "GAG";
    for ( var key in dnaCounter) {
        if (key === map) {
            var total = (DNAlist.length);
            var proportion = parseFloat((dnaCounter[key]) / total)
            var percentage = proportion * 100
            var result = Math.round(percentage)
            sort()
            debugger;
            alert(result + "%")
        }
        
    }
    return (result)
}
function cystic() {
    breakMaps(DNA);
    var map = "TTT";
    for (var key in dnaCounter) {
        if (key === map) {
            var total = (DNAlist.length);
            var proportion = parseFloat((dnaCounter[key]) / total);
            var percentage = proportion * 100;
            var result = Math.round(percentage);
            sort()
            alert(result + "%");
        }
        
        return (result);
       
    }
    return (result);
}
    function fragilo() {
        breakMaps(DNA);
        var map = "CGG";
        for (var key in dnaCounter) {
            if (key === map) {
               var total = (DNAlist.length);
                var proportion = parseFloat((dnaCounter[key]) / total);
                var percentage = proportion * 100;
                var result = Math.round(percentage);
                sort()
                alert(result + "%");
            }
        }
        return (result);
    }
    function tay() {
        breakMaps(DNA);
        var map = "CAA";
        for (var key in dnaCounter) {
            if (key === map) {
               var total = (DNAlist.length);
                var proportion = parseFloat((dnaCounter[key]) / total);
                var percentage = proportion * 100;
                var result = Math.round(percentage);
                sort()
                alert(result+ "%");
            }
        }
        return (result);

    }
    
    function chartUp() {
        var datapoints = []
        topCodons.forEach(function(codon){ 
            datapoints.push({})
        })
        datapoints.forEach(function(obj){
            obj.y = topCodonVal[datapoints.indexOf(obj)]
           obj.name = topCodonStr[datapoints.indexOf(obj)]
        })

        var chart = new CanvasJS.Chart("chartContainer", {
            theme: "dark2",
            exportFileName: "Doughnut Chart",
            exportEnabled: true,
            animationEnabled: true,
            title:{
                text: "Top Codons"
            },
            legend:{
                cursor: "pointer",
                itemclick: explodePie
            },
            data: [{
                type: "doughnut",
                innerRadius: 90,
                showInLegend: true,
                toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
                indexLabel: "{name} - #percent%",
                dataPoints:  []
                
            }]
        
        });
        chart.render();
        }
        
    

    

    $(document).ready(function () {
        $(".first-disease").hide();
        $(".second-disease").hide();
        $(".third-disease").hide();
        $(".fourth-disease").hide();

        $("#file").submit(function (event) {
            event.preventDefault();
            DNA = DNA + document.getElementById("sequence").value;
            alert("You have successfully submitted your sequence.");
            $("#file").hide();
            chartUp()
            return (DNA);
        }
        )
        $("#sickleCell").click(function (event) {
            event.preventDefault
            sickleCell()
        })
        $("#cystic").click(function (event) {
            event.preventFunction
            cystic()
        })

        $("#fragilo").click(function (event) {
            event.preventDefault
            fragilo()
        })

        $("#tay").click(function (event) {
            event.preventDefault
            tay()
        })
        $("#sickleInfo").click(function(){
            $(".first-disease").toggle();
        })
        $("#cysticInfo").click(function(){
            $(".second-disease").toggle();
        })
        $("#tayInfo").click(function(){
            $(".third-disease").toggle();
        })
        $("#fragiloInfo").click(function(){
            $(".fourth-disease").toggle();
        })
        

    })
