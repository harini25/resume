function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
loadJson("data.json",function(text)
{
  let data=JSON.parse(text);
  console.log(data);
  fun_education(data.education);
});

var div2 = document.querySelector("#child2");
function fun_education(edu){
  var headLine=document.createElement("h2");
  headLine.textContent="Educational Qualifications";
  div2.appendChild(headLine);
  var underLine=document.createElement("hr");
  div2.appendChild(underLine);
  var list=document.createElement("ul");
  div2.appendChild(list);
  for(var i=0;i<edu.length;i++)
{
  var listItem1=document.createElement("li");
  listItem1.textContent=edu[i].degree;

  list.appendChild(listItem1);
  var listItem1=document.createElement("li");
  listItem1.textContent=edu[i].institute;

  list.appendChild(listItem1);
  var listItem1=document.createElement("li");
  listItem1.textContent=edu[i].data;

  list.appendChild(listItem1);
}
}
