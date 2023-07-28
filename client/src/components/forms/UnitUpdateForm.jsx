import {useState} from "react";
import {useGlobalContext} from "../../context/GlobalContext.jsx";
import {toast} from "react-toastify";
import FormRow from "./FormRow.jsx";
import FormRowSelect from "./FormRowSelect.jsx";
import ModalWrapper from "./ModalWrapper.jsx";

const UnitUpdateForm = ({ unit, setShowUnitUpdateForm }) => {

	const { _id, propertyUnit, street, city, state, zip, isPrimary, tenant, user, bedrooms, bathrooms, rent, fmrRent, appliances, mortgage } = unit

	const [values, setValues] = useState(unit)

	const { displayAlert, clearAlert } = useGlobalContext()

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
		// updateUnit()
		toast.success('UnitDetails Successfully Updated')
	}


	return (
		<ModalWrapper>
		<div className="modal  border-solid border-4 rounded-3xl p-24">
			<div className="text-center text-2xl pb-12">Edit Unit Details</div>

			<form className="form grid grid-auto-columns: minmax(0, 1fr) place-items-stretch gap-x-8 content-around h-5/6 " onSubmit={handleSubmit}>
				<FormRow labelText="unit" type="text" name="unit" value={values.propertyUnit} handleChange={handleChange}/>
				<FormRow labelText="street" type="text" name="street" value={values.street} handleChange={handleChange}/>
				<FormRow labelText="city" type="text" name="city" value={values.city} handleChange={handleChange}/>
				<FormRow labelText="state" type="text" name="state" value={values.state} handleChange={handleChange}/>
				<FormRow labelText="zip" type="text" name="zip" value={values.zip} handleChange={handleChange}/>
				<FormRow labelText="isPrimary" type="text" name="isPrimary" value={values.isPrimary} handleChange={handleChange}/>
				<FormRow labelText="bedrooms" type="number" name="bedrooms" value={values.bedrooms} handleChange={handleChange}/>
				<FormRow labelText="bathrooms" type="number" name="bathrooms" value={values.bathrooms} handleChange={handleChange}/>
				<FormRow labelText="rent" type="number" name="rent" value={values.rent} handleChange={handleChange}/>
				<FormRow labelText="fmrRent" type="number" name="fmrRent" value={values.fmrRent} handleChange={handleChange}/>

				<div className="flex justify-around pt-10">
					<button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded text-xs'>Update Unit</button>
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded text-xs" onClick={() => setShowUnitUpdateForm(false)}>Cancel</button>
				</div>

			</form>
		</div>

		</ModalWrapper>
	);
};


export default UnitUpdateForm;