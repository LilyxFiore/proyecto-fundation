var imgProducto = document.getElementsByClassName("detalle-producto")[0];
imgProducto.src= localStorage.getItem("imgsrc");

var MyBagBtn = document.getElementById("btnMyBag");
var myBag = document.getElementById("myBag");



var listImg = [];
listImg.push(imgProducto.src);

localStorage.setItem('myArray', listImg);



var array = localStorage.getItem('myArray');

MyBagBtn.addEventListener("click", function(){
  for(i = 0; i < listImg.length; i++){
      createBagItem(listImg[i],i);
  }
})

function createBagItem(srcImg,i){
  var divItem = document.createElement("div");
  var img = document.createElement("img");
  var divName = document.createElement("div");
  var aName = document.createElement("a");
  var select = document.createElement("select");
  var p = document.createElement("p");
  var spanGreen = document.createElement("span");
  var itemPrice = document.createElement("div");
  var aTrash = document.createElement("a");
  var price = document.createElement("p");


  divItem.setAttribute("class","my-bag-item");
  img.src=srcImg;
  img.setAttribute("class","item-img");

  divName.setAttribute("class","item-name");

  aName.appendChild(document.createTextNode("Product number  "+i));

  p.setAttribute("class","f-12");
  p.appendChild(document.createTextNode("Estimated Arrival"));
  spanGreen.setAttribute("class","green");
  spanGreen.appendChild(document.createTextNode("Jun.20 - Jul. 19"));
  p.appendChild(spanGreen);

  itemPrice.setAttribute("class",'item-price text-right');
  aTrash.setAttribute("class", 'fa fa-trash-o');

  aTrash.addEventListener("click", function() {
    myBag.removeChild(divItem);
  })

  price.setAttribute("class", "title");
  var num = 90.05 + i;
  price.innerHTML="$"+ num;

  itemPrice.appendChild(aTrash);
  itemPrice.appendChild(price);

  divItem.appendChild(img);
  divItem.appendChild(divName);
  divName.appendChild(aName);
  divName.appendChild(select);
  createOption(select);

  divName.appendChild(p);
  divItem.appendChild(itemPrice);
  document.getElementById('myBag').insertBefore(divItem, myBag.childNodes[1]);
}

function createOption(select, divName){
  for(i= 1; i < 10; i++){
    var opt = document.createElement("option");
    opt.value = i;
    opt.appendChild(document.createTextNode(i));
    select.appendChild(opt);
  }
}
