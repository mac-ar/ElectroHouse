module.exports = (sequelize, DataTypes) => {
    let alias = 'Perfiles'
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
        tableName: 'perfiles',
        timestamp: true,
        paranoid: true
    }

    const Perfil = sequelize.define(alias, col, config)

    //Asociacion 
    Perfil.associate = (models) => {
        Perfil.hasMany(models.Usuarios, {
            as: 'usuario',
            foreignKey: 'perfil_id'
        })
    }

    return Perfil
}