const {City} = require("../models/index");
const {Op} = require("sequelize");

class CityRepository {

    async createCity({name}){
        try{
            const city = await City.create({
                name
            });
            return city;
        }catch(error){
            console.log("Something went wrong in the repository layes");
            throw error;
        }
    }

    async deleteCity(cityId){

        try {
            //writing where clause in using ORM
            await City.destroy({
                where:{
                    id:cityId
                }
            });
            return true;
        }catch(error){
            console.log("Something went wrong in the repository layes");
            throw error;
        }
    }

    async updateCity(cityId,newData) {

        try{
            /*
            The below approach also works fine but will not return updated object
            const city = await City.update(newData,{
                where:{
                    id:cityId
                },
            });

            For getting updated object use following
            */
            const city = await City.findByPk(cityId);   
            city.name = newData.name;
            await city.save();
            return city;
        }catch(error){
            console.log("Something went wrong in the repository layes");
            throw error;
        }
        
    }

    //getCity fetch the details for perticular city
    async getCity(cityId){

        try{
            const city = await City.findByPk(cityId);
            return city;
        }catch(error){
            console.log("Something went wrong in the repository layes");
            throw error;
        }
    }

    async getAllCities(filter){
        try{
            if(filter.name){
                const cities = await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith]:filter.name
                        }
                    }
                });

                return cities;
            }
            const cities = await City.findAll();
            return cities;
        }catch(error){
            console.log("Something went wrong in the repository layes");
            throw error;
        }
    }
}

module.exports = CityRepository;