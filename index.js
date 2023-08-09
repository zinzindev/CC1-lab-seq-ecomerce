const {
	Customer,
	Department,
	Supplier,
	Employee,
	Order,
	Product,
	OrderItem,
} = require('./models');

const run = async () => {
	// const data = await Department.findAll({ include: Employee });
	// const data = await Supplier.findAll();
	// const data = await Employee.findAll({ include: Department });
	// const data = await Order.findAll({
	// 	// include: [Employee, Customer],

	// 	include: [
	// 		{
	// 			model: Employee,
	// 			include: Department,
	// 		},
	// 		Customer,
	// 	],
	// });

	const data = await Customer.findAll({ include: [Employee] });

	console.log(JSON.stringify(data, null, 2));
};

run();
