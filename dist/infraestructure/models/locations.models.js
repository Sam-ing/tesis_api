"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adress = exports.Locality = exports.Province = exports.Country = void 0;
const typeorm_1 = require("typeorm");
const userProfile_model_1 = require("./userProfile.model");
let Country = class Country {
};
exports.Country = Country;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Country.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Country.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Province, (province) => province.country, { cascade: true }),
    __metadata("design:type", Object)
], Country.prototype, "provinces", void 0);
exports.Country = Country = __decorate([
    (0, typeorm_1.Entity)("country")
], Country);
let Province = class Province {
};
exports.Province = Province;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Province.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Province.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Locality, (locality) => locality.province, { cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Object)
], Province.prototype, "localities", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Country, (country) => country.provinces, { eager: true, nullable: false }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Country)
], Province.prototype, "country", void 0);
exports.Province = Province = __decorate([
    (0, typeorm_1.Entity)("province")
], Province);
let Locality = class Locality {
};
exports.Locality = Locality;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Locality.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Locality.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Province, (province) => province.localities, { eager: true, nullable: false }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Province)
], Locality.prototype, "province", void 0);
exports.Locality = Locality = __decorate([
    (0, typeorm_1.Entity)("locality")
], Locality);
let Adress = class Adress {
};
exports.Adress = Adress;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Adress.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => userProfile_model_1.UserProfile, (userProfile) => userProfile.adress, { nullable: false }),
    __metadata("design:type", userProfile_model_1.UserProfile)
], Adress.prototype, "userProfile", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Country, (country) => country, { nullable: false, eager: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Country)
], Adress.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Province, (province) => province, { nullable: false, eager: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Province)
], Adress.prototype, "province", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Locality, (locality) => locality, { nullable: false, eager: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Locality)
], Adress.prototype, "locality", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Adress.prototype, "street", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Adress.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Adress.prototype, "floor", void 0);
exports.Adress = Adress = __decorate([
    (0, typeorm_1.Entity)("adress")
], Adress);
