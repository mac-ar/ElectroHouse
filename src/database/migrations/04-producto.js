module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('productos', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nombre: {
                type: Sequelize.STRING,
                allowNull: false
            },
            descripcion: {
                type: Sequelize.STRING,
                allowNull: false
            },
            especificaciones: {
                type: Sequelize.STRING,
                allowNull: false
            },
            img: {
                type: Sequelize.STRING,
                allowNull: false
            },
            precio: {
                type: Sequelize.FLOAT,
            },
            descuento: {
                type: Sequelize.INTEGER
            },
            verIndex_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'verIndex',
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
        return queryInterface.dropTable('productos');
    }
};