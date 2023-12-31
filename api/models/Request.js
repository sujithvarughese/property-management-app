import mongoose from 'mongoose'
import validator from 'validator'

const RequestSchema = new mongoose.Schema({
	unit: {
		type: mongoose.Types.ObjectId,
		ref: 'Unit',
	},
	user: {
		type: mongoose.Types.ObjectId,
		ref: 'Tenant'
	},
	tenantName: {
		type: String,
	},
	title: {
		type: String
	},
	description: {
		type: String
	},
	urgent: {
		type: Boolean,
		default: false
	},
	status: {
		type: String,
		enum: ['Pending', 'Completed', 'In Progress'],
		default: 'Pending'
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
}, {timestamps: true})

export default mongoose.model('Request', RequestSchema)