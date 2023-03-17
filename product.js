window.onload = function () {
  // alert("working");

  var divFromHtml = document.getElementById("card-images");
  var dataFromLs = JSON.parse(localStorage.getItem("product"));

  var stored = [];

  for (var i = 0; i < dataFromLs.length; i++) {
    stored += `<div>
        <div>
          <img
            src="${dataFromLs[i].image}"
            alt="product-image"
          />
        </div>
        <div>
          <p>${dataFromLs[i].name}</p>
          <p>₹${dataFromLs[i].price}</p>
          <button onclick='addTocart(${JSON.stringify(
            dataFromLs[i]
          )})'>Add to Cart</button>
        </div>
      </div>`;
  }
  divFromHtml.innerHTML = stored;
};

function addTocart(pro) {
    var product =JSON.stringify(pro);
    var dataFromLs =JSON.parse(localStorage.getItem("userData"));
    var currentUser =JSON.parse(localStorage.getItem("currentUser"));

    if(currentUser){
        var allUsers =[];
        for( var i=0; i<dataFromLs.length; i++){
            if(dataFromLs[i].email === currentUser["currentUserEmail"]){
                var newObj = dataFromLs[i];
                newObj["cartProducts"] = newObj["cartProducts"] || [];
                newObj["cartProducts"].push(JSON.parse(product));
                allUsers.push(newObj);
            }
            else{
                allUsers.push(dataFromLs[i]);
            }
        }
        console.log(allUsers);
        localStorage.setItem("userData",JSON.stringify(allUsers));
        alert("Product added to cart");
    }
    else{
        alert("login first to add product into cart");
    }
}