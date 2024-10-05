import { Formik, useFormik } from "formik";

export default function Register() {
    const formik = useFormik({
        initialValues:
        {
            userName: '',
            email: '',
            password: ''
        }, onSubmit: RegisterUser,
        validate: values => {
            let errors = {};
            if (values.email.length <= 10) {
                errors.email = "email is required !";
            }
            if (values.password.length <= 8) {
                errors.password = "password is required !";
            }
            return errors;

        }
    })

    async function RegisterUser() {
        const {data} = await axios.post(`https://ecommerce-node4.onrender.com/auth/signup`, formik.values);
    }
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control"
                        name="userName"
                        value={formik.userName}
                        onChange={formik.handleChange}
                        id="floatingInput" placeholder="" />
                    <label htmlFor="floatingInput">UserName</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" name="email" value={formik.email} onChange={formik.handleChange} onBlur={formik.handleBlur} id="floatingInput" placeholder="" />
                    <label htmlFor="floatingInput">email</label>

                    {formik.touched.email && formik.errors.email ? <div className="alert alert-danger">{formik.errors.email}</div> : null}
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" name="password" value={formik.password} onChange={formik.handleChange} onBlur={formik.handleBlur} id="floatingPassword" placeholder="" />
                    <label htmlFor="floatingPassword">password</label>
                    {formik.touched.password && formik.errors.password ? <div className="alert alert-danger">{formik.errors.password}</div> : null}
                </div>
                <button type="submit" className="btn btn-outline-info">Register</button>
            </form>

        </>
    );
}