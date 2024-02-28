module.exports = (sequelize, DataTypes) => {
    let alias = 'CabeceraCompras'
    let col = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        usuario_id: {
            type: DataTypes.INTEGER
        },
        cantidadTotal: {
            type: DataTypes.INTEGER
        },
        precioTotal: {
            type: DataTypes.FLOAT
        },
        fechaCompra: {
            type: DataTypes.DATE
        },
        cerrado: {
            type: DataTypes.INTEGER(1)
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
        tableName: 'cabeceraCompras',
        timestamp: true,
        paranoid: true
    }

    const Carrito = sequelize.define(alias, col, config)

    //Asociacion
    Carrito.associate = (models) => {
        Carrito.belongsTo(models.Usuarios, {
            as: 'usuario',
            foreignKey: 'usuario_id'
        });

        Carrito.hasMany(models.DetalleCompras, {
            as: 'detalleCompra',
            foreignKey: 'idCabeceraCompra'
        })
    }

    return Carrito
}