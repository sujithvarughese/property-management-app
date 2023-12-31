import {Expense} from "../../components/index.js";
import {useState} from "react";
import {useGlobalContext} from "../../context/GlobalContext.jsx";
import {toast} from "react-toastify";
import {useEffect} from "react";
import { ExpenseCreateForm } from "../../components/forms/index.js";


const Accounting = () => {

	const { readExpenses, expenses, isLoading, units } = useGlobalContext()

	const [showCreateExpenseForm, setShowCreateExpenseForm] = useState(false)

	useEffect(() => {
		readExpenses()
	}, [])


	return (
		<div className="accounting-page">

			<div className="title border-b-2 mx-8">Accounting</div>

			<div className="text-center text-xl py-8">Upcoming expenses</div>

			<div className="grid-cols-7 mb-2 justify-items-start pt-4 hidden sm:grid">
				<p className="text-xl font-bold">Due Date</p>
				<p className="text-xl font-bold">Type</p>
				<p className="text-xl font-bold col-span-2">Payee</p>
				<p className="text-xl font-bold">Amount</p>
				<p className="text-xl font-bold">Status</p>
			</div>

			<div className="payments-container">
				{expenses?.map(expense => {
					return (
						<div key={expense._id} className="bg-white odd:bg-gray-200">
							<Expense {...expense}/>
						</div>

					)
				})}
			</div>


			<div className="">

				<button className="btn" onClick={() => setShowCreateExpenseForm(true)}>Create Expense</button>

				{ showCreateExpenseForm && <ExpenseCreateForm setShowCreateExpenseForm={setShowCreateExpenseForm}/>}
			</div>




		</div>
	);
};

export default Accounting;