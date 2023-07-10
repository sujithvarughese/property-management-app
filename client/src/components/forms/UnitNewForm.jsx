import {useState} from "react";
import {useGlobalContext} from "../../context/GlobalContext.jsx";
import {toast} from "react-toastify";
import FormRow from "./FormRow.jsx";
import FormRowSelect from "./FormRowSelect.jsx";

const initialState = {
	propertyUnit: '',
	street: '',
	city: '',
	state: '',
	zip: '',
	isPrimary: false,
	tenant: null,
	user: null,
	bedrooms: 0,
	bathrooms: 0,
	rent: 0,
	fmrRent: 0,
	appliances: null,
	repairs: null,
	insurance: {
		company: '',
		premium: 0,
		details: ''
	},
	mortgage: null,
	association: null,
	taxes: null,
	maintenance: null
}

const UnitNewForm = () => {

	const [values, setValues] = useState(initialState)

	const { displayAlert, clearAlert, createUnit } = useGlobalContext()

	const handleChange = (e) => {
		setValues({...values, [e.target.name]: e.target.value})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const { propertyUnit } = values
		if (!propertyUnit) {
			displayAlert()
			clearAlert()
			return
		}
		createUnit(values)
		toast.success('Unit Successfully Created')
	}


	return (
		<div>
			<form className="form" onSubmit={handleSubmit}>

				<FormRow labelText="unit" type="text" name="propertyUnit" value={values.propertyUnit} handleChange={handleChange}/>
				<FormRow labelText="street" type="text" name="street" value={values.street} handleChange={handleChange}/>
				<FormRow labelText="city" type="text" name="city" value={values.city} handleChange={handleChange}/>
				<FormRow labelText="state" type="text" name="state" value={values.state} handleChange={handleChange}/>
				<FormRow labelText="zip" type="text" name="zip" value={values.zip} handleChange={handleChange}/>
				<FormRow labelText="isPrimary" type="text" name="isPrimary" value={values.isPrimary} handleChange={handleChange}/>
				<FormRow labelText="bedrooms" type="number" name="bedrooms" value={values.bedrooms} handleChange={handleChange}/>
				<FormRow labelText="bathrooms" type="number" name="bathrooms" value={values.bathrooms} handleChange={handleChange}/>
				<FormRow labelText="rent" type="number" name="rent" value={values.rent} handleChange={handleChange}/>
				<FormRow labelText="fmrRent" type="number" name="fmrRent" value={values.fmrRent} handleChange={handleChange}/>

				{
					values.isPrimary &&
					<div className="form-primary">
						<div className="unit-form-insurance">
							<FormRow labelText="company" type="text" name="company" value={values.insurance.company} handleChange={handleChange}/>
							<FormRow labelText="premium" type="number" name="premium" value={values.insurance.premium} handleChange={handleChange}/>
							<FormRow labelText="details" type="text" name="details" value={values.insurance.details} handleChange={handleChange}/>
						</div>
						<div className="unit-form-mortgage">
							<FormRow labelText="mortgage" type="text" name="mortgage" value={values.mortgage} handleChange={handleChange}/>
						</div>
						<div className="unit-form-tax">
							<FormRow labelText="tax" type="text" name="tax" value={values.taxes} handleChange={handleChange}/>
						</div>
						<div className="unit-form-maintenance">
							<FormRow labelText="maintenance" type="text" name="maintenance" value={values.maintenance} handleChange={handleChange}/>
						</div>
					</div>
				}

				<button type="submit" className='btn'>create property</button>
			</form>
		</div>
	);
};


export default UnitNewForm;