let stu=[]
function add(){
    let Name=document.getElementById("Name").value
     let Age=document.getElementById("Age").value
      let Quali=document.getElementById("Quali").value
       let Skills=document.getElementById("Skills").value
       let res=document.getElementById("res")
       stu.push({Name:Name,Age:Age,Quali:Quali,Skills:Skills})
       res .innerHTML="Student Added:<br>"
}
function view(){
    let res=document.getElementById("res");
    for(let i=0;i<stu.length;i++){
        res.innerHTML+=stu[i].Name+"<br>" +stu[i].Age+"<br> "+stu[i].Quali+" <br> " +stu[i].Skills+"<br>";
    }
}
function del(){
    let Name=document.getElementById("Name").value
     let Age=document.getElementById("Age").value
      let Quali=document.getElementById("Quali").value
       let Skills=document.getElementById("Skills").value
       let res=document.getElementById("res")
       stu.splice({Name:Name,Age:Age,Quali:Quali,Skills:Skills})
       res .innerHTML="Student Deleted:<br>"
}