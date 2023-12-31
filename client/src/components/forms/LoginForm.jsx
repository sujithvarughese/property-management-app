import FormRow from "./FormRow.jsx";
import { useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext.jsx";
import { toast } from "react-toastify";
import GuestLogin from "../GuestLogin.jsx";

const initialState = {
	name: '',
	email: '',
	password: '',
}

const LoginForm = () => {
	// new state values for user input values
	const [values, setValues] = useState(initialState)

	// function in our GlobalContext to login user to server
	const { loginUser, isLoading } = useGlobalContext()

	// set state values as user types
	const handleChange = (e) => {
		setValues({...values, [e.target.name]: e.target.value})
	}

	// loginUser function calls api with post request to validate login info
	// context will set state.user and isAdmin appropriately
	const handleSubmit = (e) => {
		e.preventDefault()
		const { email, password } = values
		if (!email || !password) {
			toast('Enter valid email and password!')
			return
		}
		loginUser({ email, password })
	}

	return (
		<form className='form max-w-sm mx-auto' onSubmit={handleSubmit}>

			<div className="text-center">
				<h2 className="text-center my-12 text-2xl">Login</h2>
			</div>

			<div className="sm:m-10 space-y-10 mb-12">
				<FormRow className="" name='email' labelText='email' type='email' value={values.email} handleChange={handleChange} />
				<FormRow type="password" name='password' labelText='password' password='email'  value={values.password} handleChange={handleChange} />
				<button type='submit'  className="btn">log in</button>
			</div>
			<GuestLogin />
		</form>

	);
};

export default LoginForm;