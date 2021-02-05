var images=[
    "dad.jpg","mom.jpg","sister.jpg"
];
var family=[
    "My dad","My mom","My sister"
];
var i=0;
function next(){
    document.getElementById("imgbk").src=images[i] 1++;
    if(i==3){
        i=0;
    }
}
