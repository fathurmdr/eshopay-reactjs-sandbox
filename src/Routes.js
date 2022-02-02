import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import DashboardLayout from './layout/DashboardLayout'
import MainLayout from './layout/MainLayout'
import AddCategory from './views/category/AddCategory'
import Categories from './views/category/Categories'
import Order from './views/order/Order'
import AccountPayment from './views/payment/AccountPayment'
import TransactionPayment from './views/payment/TransactionPayment'
import Product from './views/product/Product'
import Flexbox from './views/tailwind/Flexbox'



export default function Routes() {
    return useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                { path: 'category', element: <Categories /> },
                { path: 'product', element: <Product /> },
                { path: 'flexbox', element: <Flexbox /> }
            ]
        },
        {
            path: '/dashboard',
            element: <DashboardLayout />,
            children: [
                { path: 'category', element: <Categories /> },
                { path: 'product', element: <Product /> },
                { path: 'order', element: <Order /> },
                { path: 'payment', element: <AccountPayment /> },
                { path: 'transaction', element: <TransactionPayment /> }
            ]
        },
        { path: '*', element: <Navigate to='/404' replace /> }
    ])
    /* return (
        <Switch>
            <Redirect exact from='/' to='/home'/>
            <Route path='/home' component={MainLayout}/>
            <Route exact path='/category' component={Categories}/>
            <Route exact path='/category/new' component={AddCategory}/>
            <Route exact path='/product' component={Product}/>
        </Switch>
    ) */
}
