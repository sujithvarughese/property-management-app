import { useState } from "react";
import Unit from "./Unit.jsx";
import {NavLink} from "react-router-dom";
import UnitForm from "./forms/UnitForm.jsx";

const Property = (property) => {


	const { _id, address, units } = property

	const [showUnits, setShowUnits] = useState(false)
	const [showForm, setShowForm] = useState(false)

	return (
		<div className="property-container">
			<div className="property-info">

				<div className="property-address">

					<div className="address-line-1">
						<a onClick={() => setShowUnits(!showUnits)} style={{cursor: 'pointer'}}>
						<span>{address.street}</span>
						<span>{address.streetOptions}</span>
						</a>
					</div>
					<div className="address-line-2">
							<span>{address.city}, </span>
							<span>{address.state} </span>
							<span>{address.zip}</span>
					</div>
					<div className="add-unit">
						{showUnits && 	<button className="btn" onClick={() => setShowForm(!showForm)}>add unit</button>}
						{showForm && <UnitForm />}
					</div>

				</div>


				<div className="numRequests">

				</div>

			</div>
			<div className="property-details">
				{showUnits && units.map(unit => {
					return (
						<div key={unit._id}><Unit {...unit} /></div>
					)
				})}
			</div>

		</div>
	);
};

export default Property;