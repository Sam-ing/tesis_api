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
exports.countryController = exports.provinceController = exports.localityController = void 0;
const http_response_1 = require("../../../helpers/http.response");
class localityController {
    constructor(useCase, httpResponse = new http_response_1.HttpResponse()) {
        this.useCase = useCase;
        this.httpResponse = httpResponse;
        this.insert = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const locality = yield this.useCase.registerLocality(req.body);
                return this.httpResponse.Created(res, locality);
            }
            catch (e) {
                return this.httpResponse.Error(res, e);
            }
        });
        this.findOne = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const locality = yield this.useCase.findLocalityById(id);
                return locality ? this.httpResponse.Ok(res, locality) : this.httpResponse.NotFound(res, "Locality not found");
            }
            catch (e) {
                return this.httpResponse.Error(res, e);
            }
        });
        this.findAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const localities = yield this.useCase.getAllLocalities();
                return localities.length > 0 ? this.httpResponse.Ok(res, localities) : this.httpResponse.NotFound(res, "No localities found");
            }
            catch (e) {
                return this.httpResponse.Error(res, e);
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const deleteResult = yield this.useCase.deleteLocality(id);
                return deleteResult ? this.httpResponse.Ok(res, "Locality deleted successfuly") : this.httpResponse.NotFound(res, "Locality not found");
            }
            catch (e) {
                return this.httpResponse.Error(res, e);
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const fields = req.body;
                const updatedLocality = yield this.useCase.modifyLocality(id, fields);
                return updatedLocality ? this.httpResponse.Ok(res, updatedLocality) : this.httpResponse.NotFound(res, "Locality not found");
            }
            catch (e) {
                return this.httpResponse.Error(res, e);
            }
        });
    }
}
exports.localityController = localityController;
class provinceController {
    constructor(useCase, httpResponse = new http_response_1.HttpResponse()) {
        this.useCase = useCase;
        this.httpResponse = httpResponse;
        this.insert = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const province = yield this.useCase.registerProvince(req.body);
                return this.httpResponse.Created(res, province);
            }
            catch (e) {
                return this.httpResponse.Error(res, e);
            }
        });
        this.findOne = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const province = yield this.useCase.findProvinceById(id);
                return province ? this.httpResponse.Ok(res, province) : this.httpResponse.NotFound(res, "Province not found");
            }
            catch (e) {
                return this.httpResponse.Error(res, e);
            }
        });
        this.findAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const provinces = yield this.useCase.getAllProvinces();
                return provinces.length > 0 ? this.httpResponse.Ok(res, provinces) : this.httpResponse.NotFound(res, "No provinces found");
            }
            catch (e) {
                return this.httpResponse.Error(res, e);
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const deleteResult = yield this.useCase.deleteProvince(id);
                return deleteResult ? this.httpResponse.Ok(res, "Province deleted successfuly") : this.httpResponse.NotFound(res, "Province not found");
            }
            catch (e) {
                return this.httpResponse.Error(res, e);
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const fields = req.body;
                const updatedProvince = yield this.useCase.modifyProvince(id, fields);
                return updatedProvince ? this.httpResponse.Ok(res, updatedProvince) : this.httpResponse.NotFound(res, "Province not found");
            }
            catch (e) {
                return this.httpResponse.Error(res, e);
            }
        });
        this.addLocality = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const locality = req.body;
                const updatedProvince = yield this.useCase.addLocality(id, locality);
                return updatedProvince ? this.httpResponse.Ok(res, updatedProvince) : this.httpResponse.NotFound(res, "Province not found");
            }
            catch (e) {
                return this.httpResponse.Error(res, e);
            }
        });
    }
}
exports.provinceController = provinceController;
class countryController {
    constructor(useCase, httpResponse = new http_response_1.HttpResponse()) {
        this.useCase = useCase;
        this.httpResponse = httpResponse;
        this.insert = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const country = yield this.useCase.registerCountry(req.body);
                return this.httpResponse.Created(res, country);
            }
            catch (e) {
                return this.httpResponse.Error(res, e);
            }
        });
        this.findOne = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const country = yield this.useCase.findCountryById(id);
                return country ? this.httpResponse.Ok(res, country) : this.httpResponse.NotFound(res, "Country not found");
            }
            catch (e) {
                return this.httpResponse.Error(res, e);
            }
        });
        this.findAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const countries = yield this.useCase.getAllCountries();
                return countries.length > 0 ? this.httpResponse.Ok(res, countries) : this.httpResponse.NotFound(res, "No countries found");
            }
            catch (e) {
                return this.httpResponse.Error(res, e);
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const deleteResult = yield this.useCase.deleteCountry(id);
                return deleteResult ? this.httpResponse.Ok(res, "Country deleted successfuly") : this.httpResponse.NotFound(res, "Country not found");
            }
            catch (e) {
                return this.httpResponse.Error(res, e);
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const fields = req.body;
                const updatedCountry = yield this.useCase.modifyCountry(id, fields);
                return updatedCountry ? this.httpResponse.Ok(res, updatedCountry) : this.httpResponse.NotFound(res, "Country not found");
            }
            catch (e) {
                return this.httpResponse.Error(res, e);
            }
        });
        this.addProvinces = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const provinces = req.body;
                const updatedCountry = yield this.useCase.addProvinces(id, provinces);
                return updatedCountry ? this.httpResponse.Ok(res, updatedCountry) : this.httpResponse.NotFound(res, "Country not found");
            }
            catch (e) {
                return this.httpResponse.Error(res, e);
            }
        });
    }
}
exports.countryController = countryController;
