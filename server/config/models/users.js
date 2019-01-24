/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('users', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		firstName: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		lastName: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		age: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		imageURL: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'users'
	});
};
