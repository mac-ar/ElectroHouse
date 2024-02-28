module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('detalleCompras', {
            idCabeceraCompra: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'cabeceraCompras',
                    key: 'id'
                }
            },
            producto_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'productos',
                    key: 'id'
                }
            },
            cantidad: {
                type: Sequelize.INTEGER
            },
            precioUnitario: {
                type: Sequelize.FLOAT,
            },
            descuento: {
                type: Sequelize.INTEGER
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
        return queryInterface.dropTable('detalleCompras');
    }
};