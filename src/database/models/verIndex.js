module.exports = (sequelize, DataTypes) => {
    let alias = 'VerIndex'
    let col = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        },
        deletedAt: {
            type: DataTypes.DATE
        }
    }
    let config = {
        tableName: 'verindex',
        timestamp: true,
        paranoid: true
    }

    const VerIndex = sequelize.define(alias, col, config)

    //Asociacion 
    VerIndex.associate = (models) => {
        VerIndex.hasMany(models.Productos, {
            as: 'productos',
            foreignKey: 'verIndex_id'
        })
    }

    return VerIndex
}