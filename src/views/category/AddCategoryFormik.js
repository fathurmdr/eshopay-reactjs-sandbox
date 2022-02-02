import React, { Fragment,useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import apiCategory from '../../api/apiCategory';
import { toast } from 'react-toastify';
import { useFormik } from "formik";
import * as Yup from "yup";

export default function AddCategoryFormik(props) {

   /*  const [values, setValues] = useState({
        cate_id: undefined,
        cate_name: ''
    }); */

    /* const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    } */

    /* const onSubmit= async()=>{
        const payload = {
            cate_name : (values.cate_name).toUpperCase() ||''
        }

        await apiCategory.createRow(payload)
            .then(result =>{
                //console.log(result);
                props.closeModal();
                toast.success("Data successfully inserted")
                props.onRefresh();
            })
            .catch(error => console.log(error))
    } */

    const formik = useFormik(
        {
            initialValues : {
                cate_name : ""
            },
            validationSchema : Yup.object().shape({
                cate_name : Yup.string().required("Please enter category name")
            }),
            onSubmit : async (values) =>{
                const payload = {
                    cate_name : (values.cate_name).toUpperCase() ||''
                }

                await apiCategory.createRow(payload)
                .then(() =>{
                    //console.log(result);
                    props.closeModal();
                    toast.success("Data successfully inserted")
                    props.onRefresh();
                })
                .catch(error => console.log(error))
            }
        }
    )
    return (
        <div>
            <Transition appear show={props.isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    static
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={() => null}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Add Category
                                </Dialog.Title>
                                <div className="mt-2">
                                    <form action="#" method='POST'>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                Category Name
                                            </label>
                                            <input
                                                type="text"
                                                id="cate_name"
                                                name="cate_name"
                                                value={formik.values.cate_name}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 uppercase rounded-md"
                                            />
                                            {formik.touched.cate_name && formik.errors.cate_name ? (
                                                <span className="error">{formik.errors.cate_name}</span>
                                            ) : null}
                                        </div>
                                    </form>
                                </div>

                                <div className="flex flex-row space-x-4 mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={formik.handleSubmit}
                                    >
                                       Submit
                                    </button>

                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={props.closeModal}
                                    >
                                       Cancel
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}
