import React from 'react'
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup'; 

import CustomButton from '../Button/Button';
import './Login-Form.scss';
import {SUBMIT, EMAIL_ERROR, MIN_PASSWORD_ERROR, MAX_PASSWORD_ERROR, REQUIRED} from '../../../constants/constants';
import { loginFormValues } from '../../../types/LoginFormTypes';


/**
    Formik form that takes email and password from the user
    Sends input data to parent component
    @params
        loginSubmitHandler - Function from parent component that processes input data
*/
const LoginForm:React.FC<{loginSubmitHandler:Function}> = ({loginSubmitHandler}) => {

    return (
        <Formik
          initialValues={{ 
              email: '', 
              password: ''
            }}
          validationSchema={Yup.object({
            email: Yup.string().email(EMAIL_ERROR).required(REQUIRED),
            password: Yup.string()
                .min(8, MIN_PASSWORD_ERROR)
                .max(15, MAX_PASSWORD_ERROR)
                .required(REQUIRED),            
          })}
          onSubmit={(values:loginFormValues, { setSubmitting, resetForm }, ) => {
            setTimeout(() => {
              loginSubmitHandler(values);
              setSubmitting(false);
              resetForm();
            }, 400);
          }}
        >
        {formik => (
            <div className="container py-5 px-3" id="form-container">
                <div className="row justify-content-center" >
                    <div className="col-10 col-md-9 col-lg-7 col-xl-6 pt-3 text-center" id="form-parent-col" >
                        <h1 className="pb-3">Login Form</h1>

                        <Form onSubmit={formik.handleSubmit} id="login-form"> 
                            <div className="row my-3">
                                <label className="col-lg-3" htmlFor="email">Email</label>
                                <Field id="email" type="email" className="col-sm-12 col-lg-9" 
                                    {...formik.getFieldProps('email')} />
                                {formik.touched.email && formik.errors.email ? 
                                    (<div className="error-message">{formik.errors.email}</div>) : null}
                            </div>
                            
                            <div className="row py-2">
                                <label className="col-lg-3" htmlFor="password">Password</label>
                                <Field id="password" type="password" className="col-lg-9" {...formik.getFieldProps('password')}/>
                                {formik.touched.password && formik.errors.password ? 
                                    (<div className="error-message">{formik.errors.password}</div>) : null}
                            </div>
                            
                            <div className="mt-3">
                                <CustomButton caption="Submit" usage={SUBMIT}/>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
            )        
        }
        </Formik>
    )
}

export default LoginForm;