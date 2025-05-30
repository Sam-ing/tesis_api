import { countryEntity, localityEntity, provinceEntity } from "../../domain/locations/locations.entities";
import { countryRepository, localityRepository, provinceRepository } from "../../domain/locations/locations.repositories";
import { countryValue, localityValue, provinceValue } from "../../domain/locations/locations.values";

export class LocalityUseCase{
    constructor(private readonly localityRepository:localityRepository){}

    public async registerLocality(data:localityEntity){
        const locality = new localityValue(data)
        const registeredLocality = await this.localityRepository.insertLocality(locality)
        const newLocality = registeredLocality ? new localityValue(registeredLocality) : registeredLocality
        return newLocality
    }

    public async findLocalityById(id:number){
        const locality = await this.localityRepository.findLocalityById(id)
        const foundLocality = locality ? new localityValue(locality) : locality
        return foundLocality
    }

    public async deleteLocality(id:number){
        const deleteResult = await this.localityRepository.deleteLocality(id)
        return deleteResult.affected ? true : false
    }

    public async modifyLocality(id:number, fields: Object){
        const updateResult = await this.localityRepository.modifyLocality(id, fields)
        return updateResult.affected ?  (updateResult.affected > 0)  ?  this.findLocalityById(id) : null : null
    }

    public async getAllLocalities(){
        const localities = await this.localityRepository.listLocalities()
        const localitiesList = localities ? localities.map(s => new localityValue(s)) : localities
        return localitiesList
    }
}

export class ProvinceUseCase{
    constructor(
        private readonly provinceRepository:provinceRepository,
        private readonly localityRepostory:localityRepository
        ){}

    public async registerProvince(data:provinceEntity){
        const province = new provinceValue(data)
        const registeredProvince = await this.provinceRepository.insertProvince(province)
        const newProvince = registeredProvince ? new provinceValue(registeredProvince) : registeredProvince
        return newProvince
    }

    public async findProvinceById(id:number){
        const province = await this.provinceRepository.findProvinceById(id)
        const foundProvince = province ? new provinceValue(province) : province
        return foundProvince
    }

    public async deleteProvince(id:number){
        const deleteResult = await this.provinceRepository.deleteProvince(id)
        return deleteResult.affected ? true : false
    }

    public async modifyProvince(id:number, fields: Object){
        console.log(fields)
        const updateResult = await this.provinceRepository.modifyProvince(id, fields)
        return updateResult.affected ?  (updateResult.affected > 0)  ?  this.findProvinceById(id) : null : null
    }

    public async getAllProvinces(){
        const provinces = await this.provinceRepository.listProvinces()
        const provincesList = provinces ? provinces.map(s => new provinceValue(s)) : provinces
        return provincesList
    }

    /** */
    public async addLocality(id:number, locality:localityEntity){
        const province = await this.provinceRepository.findProvinceById(id)
        const foundProvince = province ? new provinceValue(province) : province
        if (foundProvince){
            locality.province = foundProvince
            const newLocality = await this.localityRepostory.saveLocality(new localityValue(locality))
            if (foundProvince.localities === undefined && newLocality){
                foundProvince.localities = []
                foundProvince.localities.push(newLocality)
            }else if(foundProvince.localities && newLocality){
                foundProvince.localities.push(newLocality)
                foundProvince.localities.forEach(function (s) {
                    s=s;
                  })
            }
            const savedProvince = this.provinceRepository.saveProvince(foundProvince)
            return savedProvince
            /**  
            localities.map(s => s.province = foundProvince)
            const newLocalities = await localities.map(async s => await this.localityRepostory.saveLocality(new localityValue(s)))
            newLocalities.forEach(function (s){
                if (s === null){
                    newLocalities.pop(newLocalities.indexOf(s))
                }
            })
            if(foundProvince.localities === undefined){
                foundProvince.localities = newLocalities
            }else{
                
            }

            /**   
            newLocalities.map(s => {if(typeof s == "object"}){foundProvince.localities?.push(s)}})
            const savedProvince = await this.provinceRepository.saveProvince(foundProvince)
            return savedProvince
            */
        }
        return foundProvince
    }
}

export class CountryUseCase{
    constructor(private readonly countryRepository:countryRepository){}

    public async registerCountry(data:countryEntity){
        const country = new countryValue(data)
        const registeredCountry = await this.countryRepository.insertCountry(country)
        const newCountry = registeredCountry ? new countryValue(registeredCountry) : registeredCountry
        return newCountry
    }

    public async findCountryById(id:number){
        const country = await this.countryRepository.findCountryById(id)
        const foundCountry = country ? new countryValue(country) : country
        return foundCountry
    }

    public async deleteCountry(id:number){
        const deleteResult = await this.countryRepository.deleteCountry(id)
        return deleteResult.affected ? true : false
    }

    public async modifyCountry(id:number, fields: Object){
        const updateResult = await this.countryRepository.modifyCountry(id, fields)
        return updateResult.affected ?  (updateResult.affected > 0)  ?  this.findCountryById(id) : null : null
    }

    public async getAllCountries(){
        const countries = await this.countryRepository.listCountries()
        const countriesList = countries ? countries.map(s => new countryValue(s)) : countries
        return countriesList
    }

    public async addProvinces(id:number, provinces:any[]){
        const country = await this.countryRepository.findCountryById(id)
        const foundCountry = country ? new countryValue(country) : country
        if (foundCountry){
            const newProvinces = provinces.map(s => new provinceValue(s))
            if(foundCountry.provinces){
                newProvinces.map(s => foundCountry.provinces?.push(s))
                const savedCountry = await this.countryRepository.saveCountry(foundCountry)
                return savedCountry
            }else{
                foundCountry.provinces = newProvinces
                const savedCountry = await this.countryRepository.saveCountry(foundCountry)
                return savedCountry
            }
        }else{
            return country
        }
    }
}