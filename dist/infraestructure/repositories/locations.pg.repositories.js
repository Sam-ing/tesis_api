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
exports.countryPGRepository = exports.provincePGRepository = exports.localityPGRepository = void 0;
const locations_models_1 = require("../models/locations.models");
const postgres_1 = require("../database/postgres");
class localityPGRepository {
    constructor() {
        this.repository = postgres_1.AppDataSource.getRepository(locations_models_1.Locality);
    }
    findLocalityById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundLocality = yield this.repository.findOne({ where: { id: id } });
            return foundLocality;
        });
    }
    insertLocality(locality) {
        return __awaiter(this, void 0, void 0, function* () {
            const newLocality = yield this.repository.create(locality);
            const savedLocality = yield this.repository.save(newLocality);
            return savedLocality;
        });
    }
    deleteLocality(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteResult = yield this.repository.delete(id);
            return deleteResult;
        });
    }
    modifyLocality(id, fields) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateResult = yield this.repository.update(id, fields);
            return updateResult;
        });
    }
    listLocalities() {
        return __awaiter(this, void 0, void 0, function* () {
            const foundLocalities = yield this.repository.find();
            return foundLocalities;
        });
    }
    saveLocality(locality) {
        return __awaiter(this, void 0, void 0, function* () {
            const savedLocality = yield this.repository.save(locality);
            const newLocality = yield this.repository.findOne({ where: { id: savedLocality.id } });
            return newLocality;
        });
    }
}
exports.localityPGRepository = localityPGRepository;
class provincePGRepository {
    constructor() {
        this.repository = postgres_1.AppDataSource.getRepository(locations_models_1.Province);
    }
    findProvinceById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundProvince = yield this.repository.findOne({ where: { id: id } });
            console.log(foundProvince);
            return foundProvince;
        });
    }
    insertProvince(province) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProvince = yield this.repository.create(province);
            const savedProvince = yield this.repository.save(newProvince);
            return savedProvince;
        });
    }
    deleteProvince(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteResult = yield this.repository.delete(id);
            return deleteResult;
        });
    }
    modifyProvince(id, fields) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateResult = yield this.repository.update(id, fields);
            return updateResult;
        });
    }
    listProvinces() {
        return __awaiter(this, void 0, void 0, function* () {
            const foundProvinces = yield this.repository.find();
            return foundProvinces;
        });
    }
    saveProvince(province) {
        return __awaiter(this, void 0, void 0, function* () {
            const savedProvince = yield this.repository.save(province);
            const newProvince = yield this.repository.findOne({ where: { id: savedProvince.id } });
            return newProvince;
        });
    }
}
exports.provincePGRepository = provincePGRepository;
class countryPGRepository {
    constructor() {
        this.repository = postgres_1.AppDataSource.getRepository(locations_models_1.Country);
    }
    findCountryById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundCountry = yield this.repository.findOne({ where: { id: id } });
            return foundCountry;
        });
    }
    insertCountry(country) {
        return __awaiter(this, void 0, void 0, function* () {
            const newCountry = yield this.repository.create(country);
            const savedCountry = yield this.repository.save(newCountry);
            return savedCountry;
        });
    }
    deleteCountry(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteResult = yield this.repository.delete(id);
            return deleteResult;
        });
    }
    modifyCountry(id, fields) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateResult = yield this.repository.update(id, fields);
            return updateResult;
        });
    }
    listCountries() {
        return __awaiter(this, void 0, void 0, function* () {
            const foundCountries = yield this.repository.find();
            return foundCountries;
        });
    }
    saveCountry(country) {
        return __awaiter(this, void 0, void 0, function* () {
            const savedCountry = yield this.repository.save(country);
            const newCountry = yield this.repository.findOne({ where: { id: savedCountry.id } });
            return newCountry;
        });
    }
}
exports.countryPGRepository = countryPGRepository;
