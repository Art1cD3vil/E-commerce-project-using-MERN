import React from 'react'
import './Payment.css'
import card_icon from '../Assets/card_img.png'


const Payment = () => {
   
    
  return (
    <div>
        <div class="container1">

<form action="">

    <div class="row">

        <div class="col">
            
            

            <h3 class="title">billing address</h3>

            <div class="inputBox">
                <span>full name :</span>
                <input type="text" placeholder="Name"/>
            </div>
            <div class="inputBox">
                <span>email :</span>
                <input type="email" placeholder="abc@gmail.com"/>
            </div>
            <div class="inputBox">
                <span>address :</span>
                <input type="text" placeholder="room - street - locality"/>
            </div>
            <div class="inputBox">
                <span>city :</span>
                <input type="text" placeholder="place"/>
            </div>

            <div class="flex">
                <div class="inputBox">
                    <span>state :</span>
                    <input type="text" placeholder="India"/>
                </div>
                <div class="inputBox">
                    <span>zip code :</span>
                    <input type="text" placeholder="xxxxxx"/>
                </div>
            </div>

        </div>

        <div class="col">

            <h3 class="title">payment</h3>

            <div class="inputBox">
                <span>cards accepted :</span>
                <img src={card_icon} alt=""/>
            </div>
            <div class="inputBox">
                <span>name on card :</span>
                <input type="text" placeholder="name"/>
            </div>
            <div class="inputBox">
                <span>credit card number :</span>
                <input type="number" placeholder="xxxx-xxxx-xxxx-xxxx"/>
            </div>
            <div class="inputBox">
                <span>exp month :</span>
                <input type="text" placeholder="month"/>
            </div>

            <div class="flex">
                <div class="inputBox">
                    <span>exp year :</span>
                    <input type="number" placeholder="year"/>
                </div>
                <div class="inputBox">
                    <span>CVV :</span>
                    <input type="text" placeholder="xxxx"/>
                </div>
            </div>

        </div>

    </div>

   <a href='/contact'><input type="button"  value="proceed to checkout" class="submit-btn"/></a> 

</form>

</div>  
    </div>
  )
}

export default Payment;