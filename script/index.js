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

   let Ucoins =100;
   
   
   const cartbtns = document.getElementsByClassName('CallBtn');


   for(let cartButton of cartbtns){
       
    cartButton.addEventListener('click',function(e){
      e.preventDefault();


      const productTitle = cartButton.parentNode.parentNode.children[1].children[0].innerText
       
      const productNumber = cartButton.parentNode.parentNode.children[1].children[2].innerText

      if (Ucoins < 20) {
      alert("Not enough coins! You need at least 20 coins to make a call.");
      return; 
    } 
      Ucoins -= 20;
    getElement('Hcoin').innerText = Ucoins;
     
    alert(`Calling ${productTitle} at ${productNumber}`);
    
      const CartContainer = document.getElementById('product-cart');
      const newCart = document.createElement("div");
      newCart.classList.add('historyItem');
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

  //task 3

  document.getElementById('Hclear').addEventListener('click',
    function(e){
      e.preventDefault();
      const historyItems = document.querySelectorAll('#product-cart .historyItem');
  
  for (let Hitem of historyItems) {
    Hitem.remove();
  }

 
       
    })

  
  // let Ucopy= 2;

  // document.getElementById("Hcopy").addEventListener('click',
  //    function(){
  //      alert(``)
  //    }
  // )
  







        

