/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('project', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        project: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        formsubmitted: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        total: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        lastupdated: {
            type: DataTypes.DATE,
            allowNull: true
        },
        createdon: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        count: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        profile: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            references: {
                model: 'users',
                key: 'id'
            }
        }
    }, {
        tableName: 'project'
    });
};
