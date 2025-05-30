import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { countryRepository, localityRepository, provinceRepository } from "../../domain/locations/locations.repositories";
import { Country, Locality, Province } from "../models/locations.models";
import { countryEntity, localityEntity, provinceEntity } from "../../domain/locations/locations.entities";
import { AppDataSource } from "../database/postgres";


export class localityPGRepository implements localityRepository{
    repository: Repository<Locality>;

    constructor(){
        this.repository = AppDataSource.getRepository(Locality);
    }

    async findLocalityById(id: number): Promise<localityEntity | null> {
        const foundLocality = await this.repository.findOne({where: {id:id}});
        return foundLocality;
    }

    async insertLocality(locality: localityEntity): Promise<localityEntity | null> {
        const newLocality = await this.repository.create(locality);
        const savedLocality = await this.repository.save(newLocality);
        return savedLocality;
    }

    async deleteLocality(id: number): Promise<DeleteResult> {
        const deleteResult = await this.repository.delete(id);
        return deleteResult;
    }
    async modifyLocality(id: number, fields: Object): Promise<UpdateResult> {
        const updateResult = await this.repository.update(id, fields);
        return updateResult;
    }

    async listLocalities(): Promise<localityEntity[]> {
        const foundLocalities = await this.repository.find();
        return foundLocalities;
    } 

    async saveLocality(locality:localityEntity): Promise<localityEntity | null> {
        const savedLocality = await this.repository.save(locality)
        const newLocality = await this.repository.findOne({where: {id:savedLocality.id}})
        return newLocality
    }
}

export class provincePGRepository implements provinceRepository{
    repository: Repository<Province>;

    constructor(){
        this.repository = AppDataSource.getRepository(Province);
    }

    async findProvinceById(id: number): Promise<provinceEntity | null> {
        const foundProvince = await this.repository.findOne({where: {id:id}});
        console.log(foundProvince);
        return foundProvince;
    }

    async insertProvince(province: provinceEntity): Promise<provinceEntity | null> {
        const newProvince = await this.repository.create(province);
        const savedProvince = await this.repository.save(newProvince);
        return savedProvince;
    }

    async deleteProvince(id: number): Promise<DeleteResult> {
        const deleteResult = await this.repository.delete(id);
        return deleteResult;
    }

    async modifyProvince(id: number, fields: Object): Promise<UpdateResult> {
        const updateResult = await this.repository.update(id, fields);
        return updateResult;
    }

    async listProvinces(): Promise<provinceEntity[]> {
        const foundProvinces = await this.repository.find();
        return foundProvinces;
    } 

    async saveProvince(province:provinceEntity): Promise<provinceEntity | null> {
        const savedProvince = await this.repository.save(province)
        const newProvince = await this.repository.findOne({where: {id:savedProvince.id}})
        return newProvince
    }
}

export class countryPGRepository implements countryRepository{
    repository: Repository<Country>;

    constructor(){
        this.repository = AppDataSource.getRepository(Country);
    }

    async findCountryById(id: number): Promise<countryEntity | null> {
        const foundCountry = await this.repository.findOne({where: {id:id}});
        return foundCountry;
    }

    async insertCountry(country: countryEntity): Promise<countryEntity | null> {
        const newCountry = await this.repository.create(country);
        const savedCountry = await this.repository.save(newCountry);
        return savedCountry;
    }

    async deleteCountry(id: number): Promise<DeleteResult> {
        const deleteResult = await this.repository.delete(id);
        return deleteResult;
    }

    async modifyCountry(id: number, fields: Object): Promise<UpdateResult> {
        const updateResult = await this.repository.update(id, fields);
        return updateResult;
    }

    async listCountries(): Promise<countryEntity[]> {
        const foundCountries = await this.repository.find();
        return foundCountries;
    } 

    async saveCountry(country:countryEntity): Promise<countryEntity | null> {
        const savedCountry = await this.repository.save(country)
        const newCountry = await this.repository.findOne({where: {id:savedCountry.id}})
        return newCountry
    }
} 