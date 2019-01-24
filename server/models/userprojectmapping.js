/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('userprojectmapping', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			primaryKey: true,
			autoIncrement: true
		},
		projectId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'project',
				key: 'id'
			}
		},
		userId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'users',
				key: 'id'
			}
		}
	}, {
		tableName: 'userprojectmapping'
	});
};
