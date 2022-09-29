const Sequelize = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Videojuego', {
        //Forma especifica de declarar atributos
        nombreVidejojuego: {
            type: Sequelize.STRING,
            allowNull: true
        },
        clasificacion: Sequelize.STRING
    })
}