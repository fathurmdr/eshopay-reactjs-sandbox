import React, { useState, useEffect } from 'react'
import CartForm from './CartForm';

export default function CartList() {
    const listOfCart = [
        { prodId: 1, name: "Dell", price: 1500, qty: 1, subTotal: 5500, category: 'Komputer',subCategory : '' },
        { prodId: 2, name: "T-Shirt", price: 500, qty: 1, subTotal: 500, category: 'Fashion',subCategory : '' },
        { prodId: 3, name: "Samsung", price: 3500, qty: 1, subTotal: 3500, category: 'Handphone',subCategory : '' }
    ]

    const listOfSubCategory = [
        { subname: 'Baju Muslim', category: 'Fashion' },
        { subname: 'Kaos', category: 'Fashion' },
        { subname: 'Tablet', category: 'Handphone' },
        { subname: 'Casing', category: 'Handphone' },
        { subname: 'Laptop', category: 'Komputer' },
        { subname: 'Memory DDR3', category: 'Komputer' }
    ];

    const [category] = useState(['Fashion', 'Komputer', 'Handphone']);
    const [subCategory, setSubCategory] = useState([]);
    const [carts, setCarts] = useState(listOfCart);
    const [totalHarga, setTotalHarga] = useState(0);
    const [totalQty, setTotalQty] = useState(0);
    const [display, setDisplay] = useState(false);
    const [values, setValues] = useState({
        prod_name: undefined,
        prod_price: 0,
        prod_qty: 0,
        category: undefined,
        subCategory : undefined
    });

    const[productCheck, setProductCheck] = useState([]);

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



    const addQty = (id) => {
        setCarts(
            [...carts.map(cart => {
                if (id === cart.prodId) {
                    cart.qty = cart.qty + 1;
                    cart.subTotal = (cart.price * cart.qty)
                    return cart;
                } else {
                    return cart;
                }
            })]
        )
    }

    const minusQty = (id) => {
        setCarts(
            [...carts.map(cart => {
                if (id === cart.prodId) {
                    if (cart.qty === 1) {
                        cart.qty = 1;
                        //cart.qty = cart.qty - 1;
                    } else {
                        cart.qty = cart.qty - 1;
                    }

                    cart.subTotal = (cart.price * cart.qty)
                    return cart;
                } else {
                    return cart;
                }
            })]
        )
    }

    const deleteCart = (id) => {
        const cartFilter = carts.filter(el => el.prodId !== id);
        //setCarts(cartFilter);
        setCarts([...carts.filter(el => el.prodId !== id)])
    }

    const handleOnChange = name => event => {
        console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value })
    }

    const onSelectChange = e => {
        const value = e.target.selectedIndex !== 0 ?
            e.target.options[e.target.selectedIndex].value : null;
        setValues({ ...values, category: value });
        const categoryFilter = [...listOfSubCategory.filter(v=> v.category === value)];
        setSubCategory(categoryFilter);
    }

    const onCheckItem = (item) => () =>{
        console.log(item);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setCarts([...carts, {
            prodId: (Math.round(Math.random() * 10)),
            name: values.prod_name,
            price: values.prod_price,
            qty: values.prod_qty,
            subTotal: values.prod_price * values.prod_qty,
            category: values.category,
            subCategory : values.subCategory
        }])

        setDisplay(false);

    }

    const renderForm = () => {
        return (
            <form onSubmit={onSubmit}>
                <div>
                    <label>Product Name : </label>
                    <input type="text" placeHolder="Product Name"
                        onChange={handleOnChange('prod_name')}
                    />
                </div>
                <div>
                    <label>Price : </label>
                    <input type="text" placeHolder="Price"
                        onChange={handleOnChange('prod_price')}
                    />
                </div>
                <div>
                    <label>Quantity : </label>
                    <input type="text" placeHolder="Quantity"
                        onChange={handleOnChange('prod_qty')}
                    />
                </div>
                <div>
                    <label>Category : </label>
                    <select onChange={onSelectChange}>
                        <option>Choice Category</option>
                        {
                            category.map((value, index) =>
                                <option key={index}>{value}</option>
                            )
                        }
                    </select>
                </div>
                <div>
                    <label>Sub Category : </label>
                    <select>
                        {
                            subCategory.map((value, index) =>
                                <option key={index}>{value.subname}</option>
                            )
                        }
                    </select>
                </div>
                <div>
                    <button type='submit'>Simpan</button>
                    <button onClick={() => setDisplay(false)}>Cancel</button>
                </div>
            </form>
        )
    }


    return (
        <div>
            <h2>List Of Cart</h2>
            <button onClick={() => setDisplay(true)}>Add Product</button>
            {
                display ? 
                <CartForm 
                    onSubmitForm={onSubmit}
                    handleOnChange={handleOnChange}
                    category={category}
                    subCategory={subCategory}
                    setDisplay={setDisplay}
                /> :
                    <>
                        <table>
                            <th>Select</th>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>SubTotal</th>
                            <th colSpan={3}>Action</th>
                            <tbody>
                                {
                                    (carts || []).map(cart => (
                                        <tr key={cart.prodId}>
                                            <td>
                                                <input type="checkbox" 
                                                    onChange={onCheckItem(cart)}
                                                    checked = {productCheck[cart.prodId]}

                                                />
                                            </td>
                                            <td>{cart.prodId}</td>
                                            <td>{cart.name}</td>
                                            <td>{cart.category}</td>
                                            <td>{new Intl.NumberFormat('ID').format(cart.price)}</td>
                                            <td>{cart.qty}</td>
                                            <td>{new Intl.NumberFormat('ID').format(cart.subTotal)}</td>
                                            <td>
                                                <button onClick={() => addQty(cart.prodId)}>+</button>
                                            </td>
                                            <td>
                                                <button onClick={() => minusQty(cart.prodId)}>-</button>
                                            </td>
                                            <td>
                                                <button onClick={() => deleteCart(cart.prodId)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <h3>Total Harga : Rp. {new Intl.NumberFormat('ID').format(totalHarga)}</h3>
                        <h3>Total Qty : {totalQty}</h3>
                        <button>Checkout</button>
                    </>

            }

        </div>
    )
}
