"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryUseCase = exports.ProvinceUseCase = exports.LocalityUseCase = void 0;
const locations_values_1 = require("../../domain/locations/locations.values");
class LocalityUseCase {
    constructor(localityRepository) {
        this.localityRepository = localityRepository;
    }
    registerLocality(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const locality = new locations_values_1.localityValue(data);
            const registeredLocality = yield this.localityRepository.insertLocality(locality);
            const newLocality = registeredLocality ? new locations_values_1.localityValue(registeredLocality) : registeredLocality;
            return newLocality;
        });
    }
    findLocalityById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const locality = yield this.localityRepository.findLocalityById(id);
            const foundLocality = locality ? new locations_values_1.localityValue(locality) : locality;
            return foundLocality;
        });
    }
    deleteLocality(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteResult = yield this.localityRepository.deleteLocality(id);
            return deleteResult.affected ? true : false;
        });
    }
    modifyLocality(id, fields) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateResult = yield this.localityRepository.modifyLocality(id, fields);
            return updateResult.affected ? (updateResult.affected > 0) ? this.findLocalityById(id) : null : null;
        });
    }
    getAllLocalities() {
        return __awaiter(this, void 0, void 0, function* () {
            const localities = yield this.localityRepository.listLocalities();
            const localitiesList = localities ? localities.map(s => new locations_values_1.localityValue(s)) : localities;
            return localitiesList;
        });
    }
}
exports.LocalityUseCase = LocalityUseCase;
class ProvinceUseCase {
    constructor(provinceRepository, localityRepostory) {
        this.provinceRepository = provinceRepository;
        this.localityRepostory = localityRepostory;
    }
    registerProvince(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const province = new locations_values_1.provinceValue(data);
            const registeredProvince = yield this.provinceRepository.insertProvince(province);
            const newProvince = registeredProvince ? new locations_values_1.provinceValue(registeredProvince) : registeredProvince;
            return newProvince;
        });
    }
    findProvinceById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const province = yield this.provinceRepository.findProvinceById(id);
            const foundProvince = province ? new locations_values_1.provinceValue(province) : province;
            return foundProvince;
        });
    }
    deleteProvince(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteResult = yield this.provinceRepository.deleteProvince(id);
            return deleteResult.affected ? true : false;
        });
    }
    modifyProvince(id, fields) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(fields);
            const updateResult = yield this.provinceRepository.modifyProvince(id, fields);
            return updateResult.affected ? (updateResult.affected > 0) ? this.findProvinceById(id) : null : null;
        });
    }
    getAllProvinces() {
        return __awaiter(this, void 0, void 0, function* () {
            const provinces = yield this.provinceRepository.listProvinces();
            const provincesList = provinces ? provinces.map(s => new locations_values_1.provinceValue(s)) : provinces;
            return provincesList;
        });
    }
    /** */
    addLocality(id, locality) {
        return __awaiter(this, void 0, void 0, function* () {
            const province = yield this.provinceRepository.findProvinceById(id);
            const foundProvince = province ? new locations_values_1.provinceValue(province) : province;
            if (foundProvince) {
                locality.province = foundProvince;
                const newLocality = yield this.localityRepostory.saveLocality(new locations_values_1.localityValue(locality));
                if (foundProvince.localities === undefined && newLocality) {
                    foundProvince.localities = [];
                    foundProvince.localities.push(newLocality);
                }
                else if (foundProvince.localities && newLocality) {
                    foundProvince.localities.push(newLocality);
                    foundProvince.localities.forEach(function (s) {
                        s = s;
                    });
                }
                const savedProvince = this.provinceRepository.saveProvince(foundProvince);
                return savedProvince;
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
            return foundProvince;
        });
    }
}
exports.ProvinceUseCase = ProvinceUseCase;
class CountryUseCase {
    constructor(countryRepository) {
        this.countryRepository = countryRepository;
    }
    registerCountry(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const country = new locations_values_1.countryValue(data);
            const registeredCountry = yield this.countryRepository.insertCountry(country);
            const newCountry = registeredCountry ? new locations_values_1.countryValue(registeredCountry) : registeredCountry;
            return newCountry;
        });
    }
    findCountryById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const country = yield this.countryRepository.findCountryById(id);
            const foundCountry = country ? new locations_values_1.countryValue(country) : country;
            return foundCountry;
        });
    }
    deleteCountry(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteResult = yield this.countryRepository.deleteCountry(id);
            return deleteResult.affected ? true : false;
        });
    }
    modifyCountry(id, fields) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateResult = yield this.countryRepository.modifyCountry(id, fields);
            return updateResult.affected ? (updateResult.affected > 0) ? this.findCountryById(id) : null : null;
        });
    }
    getAllCountries() {
        return __awaiter(this, void 0, void 0, function* () {
            const countries = yield this.countryRepository.listCountries();
            const countriesList = countries ? countries.map(s => new locations_values_1.countryValue(s)) : countries;
            return countriesList;
        });
    }
    addProvinces(id, provinces) {
        return __awaiter(this, void 0, void 0, function* () {
            const country = yield this.countryRepository.findCountryById(id);
            const foundCountry = country ? new locations_values_1.countryValue(country) : country;
            if (foundCountry) {
                const newProvinces = provinces.map(s => new locations_values_1.provinceValue(s));
                if (foundCountry.provinces) {
                    newProvinces.map(s => { var _a; return (_a = foundCountry.provinces) === null || _a === void 0 ? void 0 : _a.push(s); });
                    const savedCountry = yield this.countryRepository.saveCountry(foundCountry);
                    return savedCountry;
                }
                else {
                    foundCountry.provinces = newProvinces;
                    const savedCountry = yield this.countryRepository.saveCountry(foundCountry);
                    return savedCountry;
                }
            }
            else {
                return country;
            }
        });
    }
}
exports.CountryUseCase = CountryUseCase;
