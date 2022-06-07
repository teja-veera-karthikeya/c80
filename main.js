student_array=[]
var display_array=[]
function submit(){
    for(j=1; j<=4; j++){
        var name = document.getElementById("name_of_the_student_"+j).value
        display_array.push(name)
    }
    console.log(display_array)
    var length= display_array.length
    for(i=0; i<length;i++){
        student_array.push("<h4>name - "+ display_array[i]+"</h4>")
    }
    document.getElementById("display_name_with_commas").innerHTML=student_array
    var remove_commas=student_array.join(" ")
    document.getElementById("display_name_without_commas").innerHTML=remove_commas
    document.getElementById("submit_button").style.display="none"
    document.getElementById("sort_button").style.display="inline-block"
}
function sorting(){
    display_array.sort()
    student_array=[]
    var length= display_array.length
    for(i=0; i<length;i++){
        student_array.push("<h4>name - "+ display_array[i]+"</h4>")
    }
    document.getElementById("display_name_with_commas").innerHTML=student_array
    var remove_commas=student_array.join(" ")
    document.getElementById("display_name_without_commas").innerHTML=remove_commas
}