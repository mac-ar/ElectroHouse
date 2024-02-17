module.exports = (sequelize, DataTypes) => {
    let alias = 'Productos'
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
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        especificaciones: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false
        },
        precio: {
            type: DataTypes.FLOAT
        },
        descuento: {
            type: DataTypes.INTEGER
        },
        verIndex_id: {
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
        tableName: 'productos',
        timestamp: true,
        paranoid: true
    }

    const Producto = sequelize.define(alias, col, config)

    //Asociacion 
    Producto.associate = (models) => {
        Producto.belongsTo(models.VerIndex, {
            as: 'verIndex',
            foreignKey: 'verIndex_id'
        });

        // Producto.belongsToMany(models.Usuarios, {
        //     as: 'usuariosCarrito',
        //     through: 'carritos',
        //     foreignKey: 'producto_id'
        // });

        Producto.hasMany(models.DetalleCompras, {
            as: 'detalleCompra'
        })
    }
    return Producto
}