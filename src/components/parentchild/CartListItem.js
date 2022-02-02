import React, { useState, useEffect } from 'react'

export default function CartListItem() {
    const listOfCart = [
        { prodId: 1, name: "Dell", price: 1500, qty: 1, subTotal: 5500 },
        { prodId: 2, name: "Monitor", price: 500, qty: 1, subTotal: 500 },
        { prodId: 3, name: "Samsung", price: 3500, qty: 1, subTotal: 3500 }

    ]

    const [carts, setCarts] = useState(listOfCart);
    const [totalHarga, setTotalHarga] = useState(0);
    const [totalQty, setTotalQty] = useState(0)

    //replace phase componentDidMount, agar di excute 1 kali
    useEffect(() => {
        const totalSubTotal = carts.reduce((sum, el) => sum + el.subTotal, 0);
        setTotalHarga(totalSubTotal);

        const totalSubQty = carts.reduce((sum, el) => sum + el.qty, 0)
        setTotalQty(totalSubQty);
    }, []);


    //replace phase componentDidUpdate, diexecute berulang kali setiap
    // ada perubahan di state carts 
    useEffect(() => {
        const totalSubTotal = carts.reduce((sum, el) => sum + el.subTotal, 0);
        setTotalHarga(totalSubTotal);

        const totalSubQty = carts.reduce((sum, el) => sum + el.qty, 0)
        setTotalQty(totalSubQty);
    }, [carts]);



    const addQty = (id)=>{
        setCarts(
            [...carts.map(cart =>{
                if (id === cart.prodId){
                    cart.qty = cart.qty +1;
                    cart.subTotal = (cart.price * cart.qty)
                    return cart;
                }else{
                    return cart;
                }
            })]
        )
    }

    const minusQty = (id)=>{
        setCarts(
            [...carts.map(cart =>{
                if (id === cart.prodId){
                    if (cart.qty === 1){
                        cart.qty=1;
                        //cart.qty = cart.qty - 1;
                    }else{
                        cart.qty = cart.qty - 1;
                    }
                    
                    cart.subTotal = (cart.price * cart.qty)
                    return cart;
                }else{
                    return cart;
                }
            })]
        )
    }

    const deleteCart = (id)=>{
        const cartFilter = carts.filter(el => el.prodId !== id);
        //setCarts(cartFilter);
        setCarts([...carts.filter(el => el.prodId !== id)])
    }


    return (
        <div>
            <h2>List Of Cart</h2>
            <table>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>SubTotal</th>
                <th colSpan={3}>Action</th>
                <tbody>
                    {
                        (carts || []).map(cart => (
                            <tr key={cart.prodId}>
                                <td>{cart.prodId}</td>
                                <td>{cart.name}</td>
                                <td>{new Intl.NumberFormat('ID').format(cart.price)}</td>
                                <td>{cart.qty}</td>
                                <td>{new Intl.NumberFormat('ID').format(cart.subTotal)}</td>
                                <td>
                                    <button onClick={()=> addQty(cart.prodId)}>+</button>
                                </td>
                                <td>
                                    <button onClick={()=> minusQty(cart.prodId)}>-</button>
                                </td>
                                <td>
                                    <button onClick={()=> deleteCart(cart.prodId)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <h3>Total Harga : Rp. {new Intl.NumberFormat('ID').format(totalHarga)}</h3>
            <h3>Total Qty : {totalQty}</h3>
        </div>
    )
}
