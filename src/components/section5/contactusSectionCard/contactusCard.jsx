import "./contactusCard.scss"
import {useFormik} from "formik";
import createDocument from "@/db/firebase-cloud-dbms/firestore/create-document/create-document";
import Swal from 'sweetalert2'

export default function ContactUs(){

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: '',
            occupation: '',
            email:'',
            request:'',

        },
        validate: (values) => {
            const errors = {};

            if (!values.name.trim()) {
                errors.name = 'Please Enter Your Name';
            }

            if (!values.occupation.trim()) {
                errors.occupation = 'Please Enter Your Occupation';
            }

            if (!values.email.trim()) {
                errors.email = 'Please Enter Your Mail';
            }else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }

            if (!values.request.trim()) {
                errors.request = 'Please Enter Your Message';
            } else if (values.request.length < 20) { // Example: minimum length requirement
                errors.request = 'Request needs to be at least 20 characters';
            } else if (values.request.length > 500) { // Maximum length validation
                errors.request = 'Request cannot be more than 500 characters';
            }

            return errors;
        },
        validateOnChange: true,
        onSubmit: async (values) => {

            Swal.fire({
                title: "Are you sure?",
                text: "Do you want to send this message?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, send it!"
            }).then(async (result) => {
                if (result.isConfirmed) {

                    const submitedData = {
                        name: values.name.trim(),
                        occupation: values.occupation.trim(),
                        email: values.email.trim(),
                        request: values.request.trim(),
                        readStatus: 'unread',
                    }

                    console.log('submitted values : ', submitedData);

                    const res = await createDocument("clientRequests", submitedData);
                    if (res.status === 200) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Your message was sent successfully!",
                            showConfirmButton: false,
                            timer: 2000
                        });
                        formik.resetForm()
                    } else if (res.status === 400) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: res.msg,
                            footer: ''
                        });
                    }

                }
            });




        },
    });

    return(
        <>
            <div className="contactus_card_wrapper shadow-lg rounded-4 p-3 mb-5 bg-dark">
                <div className="contactus_card_content p-2">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="contactus_card_header py-2 ">
                                <h5 className="contactus_card_header_txt">Leave here a message to contact you.</h5>
                            </div>
                            <div className="contactus_card_body py-2 ">
                                <form onSubmit={formik.handleSubmit}>
                                    <div className={'form-floating mb-3 mt-3 '}>
                                        <input id={'name'} className="form-control rounded-4 form_hover " placeholder="Enter your name here ( ex: Mr Jhon Wick)" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        <label htmlFor={'name'} className='form-label'>Enter your name here</label>
                                        {formik.touched.name && formik.errors.name ? <div className="text-danger">{formik.errors.name}</div> : null}
                                    </div>
                                    <div className={'form-floating mb-3 mt-3 '}>
                                        <input id={'occupation'} className="form-control rounded-4 form_hover" placeholder="Enter your occupation ( ex: Founder & CEO of abcd)" value={formik.values.occupation} onChange={formik.handleChange} />
                                        <label htmlFor={'occupation'} className='form-label'>Enter your occupation</label>
                                        {formik.touched.occupation && formik.errors.occupation ? <div className="text-danger">{formik.errors.occupation}</div> : null}
                                    </div>
                                    <div className={'form-floating mb-3 mt-3'}>
                                        <input id={'email'} className="form-control rounded-4 form_hover" placeholder="Enter your email address ( ex: jhonwick@exe.lk)" value={formik.values.email} onChange={formik.handleChange} />
                                        <label htmlFor={'email'} className='form-label'>Enter your email address</label>
                                        {formik.touched.email && formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}
                                    </div>
                                    <div className={'mb-3 mt-3'}>
                                        <textarea id={'request'} className="form-control rounded-4 form_hover" rows="10" placeholder="Enter your message here..." value={formik.values.request} onChange={formik.handleChange} />
                                        {formik.touched.request && formik.errors.request ? <div className="text-danger">{formik.errors.request}</div> : null}
                                    </div>
                                    <button className={'btn btn-primary w-100 rounded-5 form_hover'} type="submit">Send your message</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            {/* eslint-disable-next-line react/jsx-no-undef */}
                            <img className="img-fluid mt-5" src="/Images/contactus/contactus.png" alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}