module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('cabeceraCompras', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            usuario_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'usuarios',
                    key: 'id'
                }
            },
            cantidadTotal: {
                type: Sequelize.INTEGER
            },
            precioTotal: {
                type: Sequelize.FLOAT,
            },
            fechaCompra: {
                type: Sequelize.DATE,
            },
            cerrado: {
                type: Sequelize.INTEGER(1),
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
        return queryInterface.dropTable('cabeceraCompras');
    }
};