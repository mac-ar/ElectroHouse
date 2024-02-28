module.exports = (sequelize, DataTypes) => {
    let alias = 'Usuarios'
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
        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false
        },
        usuario: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        perfil_id: {
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
        tableName: 'usuarios',
        timestamp: true,
        paranoid: true
    }

    const Usuario = sequelize.define(alias, col, config)

    //Asociacion
    Usuario.associate = (models) => {
        Usuario.belongsTo(models.Perfiles, {
            as: 'perfil',
            foreignKey: 'perfil_id'
        });

        Usuario.hasMany(models.CabeceraCompras, {
            as: 'cabeceraCompra',
            foreignKey: 'usuario_id'
        });
    }

    return Usuario
}