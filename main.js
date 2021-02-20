names = [];
function submit(){
var  stuname = [];
    for (var j = 1; j<=4; j++ ){
        var putname = document.getElementById("name_of_the_student_"+j).value;
        console.log(putname);
        names.push(putname);
    }
    console.log(names);
    var lon= names.length;
    console.log(lon);
    for (var k=0; k<lon; k++){
        stuname.push("name-"+names[k]);
        console.log (stuname);
    }
    console.log (stuname);
    document.getElementById("DisWCom").innerHTML=stuname;
    var nocom = stuname.join("");
    console.log(nocom);
    document.getElementById("DisWTCom").innerHTML=nocom;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}
function sorting(){
    names.sort();
console.log(names);
var stuname_sorting =[];
var stulength= names.length;
    console.log(stulength);
    for (var k=0; k<stulength; k++){
        stuname_sorting.push("Name-"+names[k]);
        console.log (stuname_sorting);
    }
    var removecom = stuname_sorting.join("");
    console.log(removecom);

document.getElementById("DisWTCom").innerHTML=removecom;
}