function applyRelations(sequelize){
    console.log(sequelize.models);
    const Company = sequelize.models.Company;
    const Videojuego = sequelize.models.Videojuego;
    const Consola = sequelize.models.Consola;

    //Company puede desarrollar varios videojuegos
    Company.hasMany(Videojuego);
    //Un videojuego solo pudede ser desarrollado por una company
    Videojuego.belongsTo(Company);

    //Un videojuego puede ejecutarse en muchas consolas
    Videojuego.belongsToMany(Consola,{through:ConsolaVideojuego});
    //Una consola puede tener muchos videojuegos
    Consola.belongsToMany(Videojuego, {through:ConsolaVideojuego});

}

module.exports = {applyRelations};