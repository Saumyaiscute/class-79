var names=[];

function submitting(){
  var name1= document.getElementById("input1").value

  var name2= document.getElementById("input2").value

  var name3= document.getElementById("input3").value

  var name4= document.getElementById("input4").value
  
  names.push(name1)

  names.push(name2)

  names.push(name3)

  names.push(name4)

  document.getElementById("array").innerHTML=names

  document.getElementById("submit").style.display="none";

  document.getElementById("sort").style.display="inline-block";
}

function sorting(){
    names.sort();
    
    document.getElementById("array").innerHTML=names
}