module.exports = (sequelize, DataTypes) => {
    let alias = 'DetalleCompras'
    let col = {
        idCabeceraCompra: {
            type: DataTypes.INTEGER
        },
        producto_id: {
            type: DataTypes.INTEGER
        },
        cantidad: {
            type: DataTypes.INTEGER
        },
        precioUnitario: {
            type: DataTypes.FLOAT
        },
        descuento: {
            type: DataTypes.INTEGER
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
        tableName: 'detalleCompra',
        timestamp: true,
        paranoid: true
    }

    const Detalle = sequelize.define(alias, col, config)

    //Asociacion
    Detalle.associate = (models) => {
        Detalle.belongsTo(models.Productos, {
            as: 'producto',
            foreignKey: 'producto_id'
        });

        Detalle.belongsTo(models.CabeceraCompras, {
            as: 'cabeceraCompra',
            foreignKey: 'idCabeceraCompra'
        });
    }

    return Detalle
}