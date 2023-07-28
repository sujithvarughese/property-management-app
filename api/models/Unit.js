import mongoose from 'mongoose'

const UnitSchema = new mongoose.Schema( {
	propertyUnit: {
		type: String,
		required: [true, "Please provide unit"]
	},
	street: {
		type: String,
		required: [true, "Please provide street"]
	},
	city: {
		type: String,
		required: [true, "Please provide city"]
	},
	state: {
		type: String,
		required: true
	},
	zip: {
		type: String,
		required: [true, "Please provide zip"]
	},
	occupied: {
		type: Boolean,
	},
	tenant: {
		type: mongoose.Types.ObjectId,
		ref: 'Tenant'
	},
	user: {
		type: mongoose.Types.ObjectId,
		ref: 'User'
	},
	bedrooms : {
		type: Number,
	},
	bathrooms: {
		type: Number,
	},
	rent: {
		type: Number
	},
	fmrRent: {
		type: Number
	},
	appliances: {
		type: [mongoose.Types.ObjectId],
		ref: 'Appliance',
		default: []
	},
	payments: {
		type: [mongoose.Types.ObjectId],
		ref: 'Payment',
		default: []
	},
	createdAt: {
		type: Date,
		default: () => Date.now(),
		immutable: true
	},
	updatedAt: {
		type: Date,
		default: () => Date.now()
	}
}, { timestamps: true })

export default mongoose.model('Unit', UnitSchema)