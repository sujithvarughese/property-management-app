import FormRow from "./FormRow.jsx";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext.jsx";
import FormRowSelect from "./FormRowSelect.jsx";
import { toast } from "react-toastify";
import ModalWrapper from "./ModalWrapper.jsx";

const initialState = {
	type: '',
	description: '',
	unit: undefined,
	payTo: '',
	amount: 0,
	recurring: false,
	dateDue: '',
	datePaid: '',
	balance: 0,
	status: 'unpaid',
	comments: ''
}

const types = ['Insurance', 'Taxes', 'Maintenance', 'Repairs', 'Other']

const ExpenseCreateForm = ({ setShowCreateExpenseForm }) => {

	const { createExpense, units } = useGlobalContext()
	const [values, setValues] = useState(initialState)

	// populate array with list of units(just unitID and street) and 'NONE' for form
	const unitList = ["None", ...units.map(unit => `${unit.unitID} ${unit.street}`)]

	const handleChange = (e) => {
		setValues({...values, [e.target.name]: e.target.value})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const { type } = values
		if (!type) {
			console.log('enter type value');
			return
		}
		// if user selects None for unit, assign to null, else find unit and set to values (using string we created)
		if (values.unit === "None") {
			values.unit = undefined
		}
		else {
			values.unit = units.find(unit => `${unit.unitID} ${unit.street}` === values.unit)
		}

		createExpense(values)
		toast.success('Expense Successfully Created')
		setShowCreateExpenseForm(false)
	}


	return (
		<ModalWrapper>
			<div className='modal max-w-xl'>
				<form className="form" onSubmit={handleSubmit}>
					<div className="form-title">Add New Expense</div>
					<div className="form-content grid-cols-4">
						<FormRowSelect
							labelText="type" name="type"
							value={values.type} handleChange={handleChange} list={types}
							style="col-span-2"
						/>
						<FormRowSelect
							labelText="unit" name="unit"
							value={values.unit} handleChange={handleChange} list={unitList}
							style="col-span-2"
						/>
						<FormRow
							labelText="description" type="text" name="description"
							value={values.description} handleChange={handleChange}
							style="col-span-4"
						/>
						<FormRow
							labelText="payTo" type="text" name="payTo"
							value={values.payTo} handleChange={handleChange}
							style="col-span-4"
						/>
						<FormRow
							labelText="amount" type="number" name="amount"
							value={values.amount} handleChange={handleChange}
							style="col-span-2"
						/>
						<FormRow
							labelText="balance" type="number" name="balance"
							value={values.balance} handleChange={handleChange}
							style="col-span-2"
						/>
						<FormRowSelect
							labelText="recurring" name="recurring"
							value={values.recurring} handleChange={handleChange} list={['Yes', 'No']}
							style="col-span-2"
						/>
						<FormRowSelect
							labelText="status" name="status"
							value={values.status} handleChange={handleChange} list={['paid', 'unpaid', 'pending']}
							style="col-span-2"
						/>
						<FormRow
							labelText="dateDue" type="date" name="dateDue"
							value={values.dateDue} handleChange={handleChange}
							style="col-span-2"
						/>
						<FormRow
							labelText="datePaid" type="date" name="datePaid"
							value={values.datePaid} handleChange={handleChange}
							style="col-span-2"
						/>

						<FormRow
							labelText="comments" type="text" name="comments"
							value={values.comments} handleChange={handleChange}
							style="col-span-4"
						/>
					</div>

					<div className="flex justify-around pt-10">
						<button
							type="submit"
							className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded text-xs'>
							Add Expense
						</button>

						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded text-xs"
							onClick={() => setShowCreateExpenseForm(false)}>
							Cancel
						</button>
					</div>

				</form>
			</div>
		</ModalWrapper>
	);
};

export default ExpenseCreateForm;