import React from 'react'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const LoginForm = ({ login }) => {

    const navigate = useNavigate();

    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirm: ""
    }

    const onSubmit2 = async (values) => {
        const name = values.name;
        const email = values.email;
        const password = values.password;

        const user = {
            Name: name,
            Email: email,
            Password: password
        }

        if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
            alert("Ingresa correctamente los datos")
        } else {
            await new Promise((r) => setTimeout(r, 2000));
            login(user);
            console.log(user);
            console.log(values)
            navigate('/')
        }


    }


    const userSchema = Yup.object().shape({
        name: Yup.string()
            .required("the name is required")
            .max(50, 'The maximun of characters name is 50')
            .min(10, "The minime of characters  name is 10"),

        email: Yup.string()
            .email("Invalid email format")
            .required("the email is required")
            .max(70, "The maximun characters of the email is 70")
            .min(10, "The miniime of characters of email is 10"),

        password: Yup.string()
            .required("the pasword is required")
            .min(7, "The minime characters of the password is 7"),

        confirm: Yup.string()
            .when("password", {
                is: value => (value && value.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    'Passwword must match!'
                )
            })
            .required('Confirm your password!!!!')
    })
    return (
        <div>
            <center><h1>Login Page</h1> </center>
            <Formik
                initialValues={initialValues}
                validationSchema={userSchema}
                onSubmit={onSubmit2}
            >
                {({
                    values,
                    errors,
                    touched,
                    isSubmitting,
                    handl
                }) => (
                    <Form className='container-form'>
                        <div className='formulario'>
                            <label htmlFor="name"> Name : </label>
                            <Field type="text" placeholder="Name" name="name" id="name" />

                            {
                                errors.name && touched.name && (
                                    <ErrorMessage className='errors' name='name' component='div' />
                                )
                            }

                            <label htmlFor="email"> Email : </label>
                            <Field type='text' placeholder="Your email :" name="email" id="email" />

                            {
                                errors.email && touched.email && (
                                    <ErrorMessage className='errors' name='email' component='div' />
                                )
                            }

                            <label htmlFor="password"> password: </label>
                            <Field type='text' placeholder="Your password :" name="password" id="password" />

                            {
                                errors.password && touched.password && (
                                    <ErrorMessage className='errors' name='password' component='div' />
                                )
                            }

                            <label htmlFor="confirm"> Repeat Password:</label>
                            <Field type='text' placeholder="repeat your password  :" name="confirm" id="confirm" />

                            {
                                errors.confirm && touched.confirm && (
                                    <ErrorMessage className='errors' name='confirm' component='div' />
                                )
                            }

                            <button> Ingresar </button>

                        </div>

                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default LoginForm
