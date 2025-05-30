import { DeleteResult, UpdateResult } from "typeorm";
import { localityEntity, provinceEntity, countryEntity } from "./locations.entities";

export interface localityRepository {
    findLocalityById(id:number): Promise<localityEntity | null>;
    insertLocality(locality:localityEntity): Promise<localityEntity | null>;
    deleteLocality(id:number): Promise<DeleteResult>;
    modifyLocality(id:number, fields:Object): Promise<UpdateResult>;
    listLocalities(): Promise<localityEntity[]>;
    saveLocality(locality:localityEntity): Promise<localityEntity | null>
}

export interface provinceRepository {
    findProvinceById(id:number): Promise<provinceEntity | null>;
    insertProvince(province:provinceEntity): Promise<provinceEntity | null>;
    deleteProvince(id:number): Promise<DeleteResult>;
    modifyProvince(id:number, fields:Object): Promise<UpdateResult>;
    listProvinces(): Promise<provinceEntity[]>;
    saveProvince(province:provinceEntity): Promise<provinceEntity | null>;
}

export interface countryRepository {
    findCountryById(id:number): Promise<countryEntity | null>;
    insertCountry(locality:countryEntity): Promise<countryEntity | null>;
    deleteCountry(id:number): Promise<DeleteResult>;
    modifyCountry(id:number, fields:Object): Promise<UpdateResult>;
    listCountries(): Promise<countryEntity[]>;
    saveCountry(country:countryEntity): Promise<countryEntity | null>
}