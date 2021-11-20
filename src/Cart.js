import React from "react";
import {useCart} from "react-use-cart"

const Cart=()=>{
    const {isEmpty ,totalUniqueItems , items , totalItems , cartTotal , updateItemQuantity , removeItem , emptyCart}=useCart()

    if(isEmpty){
        return <h1 className="text-center">Your Cart is Empty</h1>
    }
    return(

        <>
        <div className="col=auto">
                             <button className="btn btn-danger ms-2 text-center" onClick={()=>emptyCart()}>Clear Cart</button>
                        </div>
        <section className="py-4 container">
            <div className="row justify-content--center">
                 <div className="col-12">
                     <h3> Cart: ({totalUniqueItems}) Total Items :({totalItems})</h3>

                     <table className="table table-light table-hover m-0">
                         {items.map((item ,index)=>{
                             return(
                             <tr key={index}>
                                 <td>
                                     <img src={item.img} style={{height:'6rem'}}/>
                                 </td>

                                 <td>{item.title}</td>
                                 <td>$ {item.price}</td>
                                 <td>Quantity:({item.quantity})</td>
                                 <td>
                                     <button className="btn btn-info ms-2" onClick={()=>updateItemQuantity(item.id , item.quantity-1)}>-</button>
                                     <button className="btn btn-info ms-2" onClick={()=>updateItemQuantity(item.id , item.quantity+1)}>+</button>
                                    
                                     <button className="btn btn-danger ms-2" onClick={()=>removeItem(item.id)}>Remove Item</button>
                                 </td>

                             </tr>
                             )
                         })}
                     </table>
                     </div>

                     <div className="col-auto ms-auto">
                         <h2>Total Price= ${cartTotal}</h2>
                         </div>

                         
            </div>
        </section>
        </>
    )

}

export default Cart;