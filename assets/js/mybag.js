var listImg = document.getElementsByClassName("img-product");
var MyBagItem = document.getElementById("myBag").firstChild;
console.log(MyBagItem);

for(i = 0; i < listImg.length; i++){
  listImg[i].addEventListener("click", function(){
    createBagItem(this.src,i);
  })
}

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

  aName.appendChild(document.createTextNode("Product number"+i));

  p.setAttribute("class","f-12");
  p.appendChild(document.createTextNode("Estimated Arrival"));
  spanGreen.setAttribute("class","green");
  spanGreen.appendChild(document.createTextNode("Jun.20 - Jul. 19"));
  p.appendChild(spanGreen);

  itemPrice.setAttribute("class",'item-price text-right');
  aTrash.setAttribute("class", 'fa fa-trash-o');
  price.setAttribute("class", "title");
  price.innerHTML="$"+ 90 + Number(i);

  itemPrice.appendChild(aTrash);
  itemPrice.appendChild(price);

  divItem.appendChild(img);
  divItem.appendChild(divName);
  divName.appendChild(aName);
  createOption(select);
  divName.appendChild(select);
  divName.appendChild(p);
  divItem.appendChild(itemPrice);
  myBag.appendChild(divItem);
}

function createOption(select, divName){
  for(i= 1; i < 10; i++){
    var opt = document.createElement("option");
    opt.value = i;
    opt.appendChild(document.createTextNode(i));
    select.appendChild(opt);
  }
}
