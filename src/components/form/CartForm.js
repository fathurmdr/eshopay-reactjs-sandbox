import React from 'react'

export default function CartForm(props) {

    return (
        <form onSubmit={props.onSubmitForm}>
            <div>
                <label>Product Name : </label>
                <input type="text" placeHolder="Product Name"
                    onChange={props.handleOnChange('prod_name')}
                />
            </div>
            <div>
                <label>Price : </label>
                <input type="text" placeHolder="Price"
                    onChange={props.handleOnChange('prod_price')}
                />
            </div>
            <div>
                <label>Quantity : </label>
                <input type="text" placeHolder="Quantity"
                    onChange={props.handleOnChange('prod_qty')}
                />
            </div>
            <div>
                <label>Category : </label>
                <select onChange={props.onSelectChange}>
                    <option>Choice Category</option>
                    {
                        props.category.map((value, index) =>
                            <option key={index}>{value}</option>
                        )
                    }
                </select>
            </div>
            <div>
                <label>Sub Category : </label>
                <select>
                    {
                        props.subCategory.map((value, index) =>
                            <option key={index}>{value.subname}</option>
                        )
                    }
                </select>
            </div>
            <div>
                <button type='submit'>Simpan</button>
                <button onClick={() => props.setDisplay(false)}>Cancel</button>
            </div>
        </form>
    )
}
