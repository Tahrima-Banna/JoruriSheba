//task-1

  const CountHeart = document.getElementById("Hcount");
  const HeartIcons = document.getElementsByClassName("heartCard");

  let Hcount = 0;

  for (let Hicon of HeartIcons) {
    Hicon.addEventListener("click",function (e) {
    e.preventDefault();
      Hcount++;
      CountHeart.innerText = Hcount;
    });
  }

  //task-2
   function getElement(id){
     const element= document.getElementById(id)
     return element;
   }

   
   
   const cartbtns = document.getElementsByClassName('CallBtn');


   for(let cartButton of cartbtns){
       
    cartButton.addEventListener('click',function(e){
      e.preventDefault();


      const productTitle = cartButton.parentNode.parentNode.children[1].children[0].innerText
       
      const productNumber = cartButton.parentNode.parentNode.children[1].children[2].innerText
       
      const CartContainer = document.getElementById('product-cart');
      const newCart = document.createElement("div");
      const timeData = [];
      const data = {
      
        date:new Date().toLocaleTimeString()
    }

     
    

      newCart.innerHTML=`<div class=" bg-white mt-2 mb-2 flex justify-between w-11/12 mx-auto rounded-xl shadow p-4">
            <div>
            <h1 class="p-[5px] font-bold">${productTitle}</h1>
           <span class="p-[5px] text-gray-500">${productNumber}</span>
           </div>
           <div>
             ${data.date}
           </div>
        </div>`
        CartContainer.append(newCart)

    })
   }

  // // document.getElementById("Call").addEventListener("click",
  //   function(e){
  //       e.preventDefault();
  //       const CartContainer = document.getElementById('product-cart');
  //       console.log(CartContainer);
  //       const newCart = document.createElement("div")
  //      newCart.innerHTML=`<div class=" bg-white mt-2 mb-2 flex justify-between w-11/12 mx-auto rounded-xl shadow p-4">
  //           <div>
  //           <h1 class="p-[5px] font-bold">call me right now</h1>
  //          <span class="font-hind text-gray-500">999</span>
  //          </div>
  //          <div>
  //            3AM
  //          </div>
  //       </div>`
  //       CartContainer.append(newCart)
  //       console.log(newCart)


  //   })





        

