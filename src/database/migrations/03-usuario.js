module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('usuarios', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nombre: {
                type: Sequelize.STRING,
                allowNull: false
            },
            apellido: {
                type: Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            img: {
                type: Sequelize.STRING,
                allowNull: false
            },
            usuario: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            perfil_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'perfiles',
                    key: 'id'
                },
            },
            createdAt: {
                type: Sequelize.DATE
            },
            updatedAt: {
                type: Sequelize.DATE
            },
            deletedAt: {
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('usuarios');
    }
};