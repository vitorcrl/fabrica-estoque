"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable("register-items", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                //   generationStrategy: Sequelize.UUID,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
                isUnique: true,
                allowNull: false,
            },
            quantity: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            user: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            createdDate: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable("register-items");

        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    },
};
