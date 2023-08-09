module.exports = (sequelize, DataTypes) => {
	const Employee = sequelize.define(
		'Employee',
		{
			name: {
				type: DataTypes.STRING(45),
				allownull: false,
			},
			address: DataTypes.STRING(45),
			salary: DataTypes.DECIMAL(10, 2),
		},
		{
			timestamps: false,
			underscored: true,
		}
	);

	Employee.associate = (db) => {
		Employee.belongsTo(db.Department, {
			foreignKey: {
				allowNull: false,
				name: 'departmentId',
			},
		});
		Employee.hasMany(db.Order, {
			foreignKey: {
				name: 'employeeId',
			},
		});
		Employee.belongsToMany(db.Customer, {
			through: db.Order,
			foreignKey: {
				allowNull: false,
				name: 'employeeId',
			},
			otherKey: {
				allowNull: false,
				name: 'customerId',
			},
		});
	};

	return Employee;
};
