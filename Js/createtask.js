function createTask(){
    var x = document.getElementById("tname").value;
    var y = document.getElementById("time").value;
    var z = document.getElementById("priority");
    var e=z.value;
    var b = document.getElementById("ctask");
    let w = localStorage.getItem("localtask");
    var event= document.getElementById("popup");
    var back= document.getElementById("backdrop");
    var ob={
        name:document.getElementById("tname").value,
        time:document.getElementById("time").value,
        priority:document.getElementById("priority").value
    };
    if(x.trim()!=0){
        if(w==null){
            arr=[];
        }
        else
        {
            arr=JSON.parse(w);
        }
        arr1=[];
        var comb= x+',"'+y+'",'+e;
        arr.push(comb);
        arr1.push(x);
        localStorage.setItem("localtask",JSON.stringify(arr));        
        event.style.display = 'block';
        back.style.display = 'block';
        document.getElementById('Taskspg').addEventListener('click', display);    
    }
    else
    {
        alert("Please fill task details");
    }
    return false;
}
function display(){
    var nav=0;
    var event= document.getElementById("popup");
    var back= document.getElementById("backdrop");
    event.style.display = 'none';
    back.style.display = 'none';
    let html='';
    let t=document.getElementById("table");
    arr.forEach((item, index) => {
        html+=`<tr>
        <td>
        <button id="button1">Task ${nav=nav+1}</button><br>
        <p> Details about the task</p>${index+1}.${item}<br>
        <button type="button" onclick="edititem(${index})" class="text-edit">Edit</button>
        <button type="button" onclick="deleteitem(${index})" class="text-danger">Delete</button>
        </td></tr>`;
    });
    t.innerHTML=html;
    } 
function deleteitem(index){
    let w = localStorage.getItem("localtask");
    arr=JSON.parse(w);
    arr.splice(index,1);
    localStorage.setItem("localtask",JSON.stringify(arr));
    display();
}
var del=document.getElementById("dtask")
del.addEventListener('click',function(){
    let w = localStorage.getItem("localtask");
    arr=JSON.parse(w);
    if(w==null){
        arr=[];
    }
    else
    {
        arr=JSON.parse(w);
        arr=[];
    }
    localStorage.setItem("localtask",JSON.stringify(arr));
    display();
})
function edititem(index){
    var x = document.getElementById("tname");
    var y = document.getElementById("time");
    var z = document.getElementById("priority");
    let w = localStorage.getItem("localtask");
    arr=JSON.parse(w);
    //x.value= arr[index];
    let t=arr[index];
    const u=t.split(",")
    x.value= u[0];
    let t1 = u[1];
    //t1=JSON.stringify(t1);
    //console.log(t1);
    y.value= t1;
    
    let t2= u[2];
    t2=JSON.stringify(t2);
    console.log(t2);
    z.value=t2;
}