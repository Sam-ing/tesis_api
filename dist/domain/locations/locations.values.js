"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countryValue = exports.provinceValue = exports.localityValue = void 0;
class localityValue {
    constructor({ id, name, province }) {
        this.id = id !== null && id !== void 0 ? id : undefined;
        this.name = name;
        this.province = province;
    }
}
exports.localityValue = localityValue;
class provinceValue {
    constructor({ id, name, localities, country }) {
        this.id = id !== null && id !== void 0 ? id : undefined;
        this.name = name;
        this.localities = localities !== null && localities !== void 0 ? localities : undefined;
        this.country = country !== null && country !== void 0 ? country : undefined;
    }
}
exports.provinceValue = provinceValue;
class countryValue {
    constructor({ id, name, provinces }) {
        this.id = id !== null && id !== void 0 ? id : undefined;
        this.name = name;
        this.provinces = provinces !== null && provinces !== void 0 ? provinces : undefined;
    }
}
exports.countryValue = countryValue;
