"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable("register-items", {
            // id: {
            //     name: "ItemProvider",
            //     columnNames: ["provider_id"],
            //     referencedColumnNames: ["id"],
            //     referencedTableName: "users",
            //     onDelete: "SET NULL",
            //     onUpdate: "CASCADE",
            // },
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
