import { CountryUseCase, LocalityUseCase, ProvinceUseCase } from "../../../application/locations/locations.useCases"
import { HttpResponse } from "../../../helpers/http.response"
import { Request, Response } from "express"

export class localityController {

    constructor(
        private useCase:LocalityUseCase, 
        private readonly httpResponse:HttpResponse = new HttpResponse()){}

    public insert = async (req:Request, res:Response) => {
        try{
            const locality = await this.useCase.registerLocality(req.body)
            return this.httpResponse.Created(res, locality)
        } catch (e){
            return this.httpResponse.Error(res, e)
        }
    }

    public findOne = async (req:Request, res:Response) => {
        try{
            const id = parseInt(req.params.id)
            const locality = await this.useCase.findLocalityById(id)
            return  locality ? this.httpResponse.Ok(res, locality) : this.httpResponse.NotFound(res, "Locality not found")
        } catch (e){
            return this.httpResponse.Error(res, e)
        } 
    }

    public findAll = async (_req:Request, res:Response) => {
        try{
            const localities = await this.useCase.getAllLocalities()
            return localities.length > 0 ? this.httpResponse.Ok(res, localities) : this.httpResponse.NotFound(res, "No localities found")
        } catch (e){
            return this.httpResponse.Error(res, e)
        }
    }

    public delete = async (req:Request, res:Response) => {
        try{
            const id = parseInt(req.params.id)
            const deleteResult = await this.useCase.deleteLocality(id)
            return deleteResult ? this.httpResponse.Ok(res, "Locality deleted successfuly") : this.httpResponse.NotFound(res, "Locality not found")
        } catch (e){
            return this.httpResponse.Error(res, e)
        }
    }

    public update = async (req:Request, res:Response) => {
        try{
            const id = parseInt(req.params.id)
            const fields = req.body
            const updatedLocality = await this.useCase.modifyLocality(id, fields)
            return updatedLocality ? this.httpResponse.Ok(res, updatedLocality) : this.httpResponse.NotFound(res, "Locality not found")
        } catch (e){
            return this.httpResponse.Error(res, e)
        }
    }
}

export class provinceController {

    constructor(
        private useCase:ProvinceUseCase, 
        private readonly httpResponse:HttpResponse = new HttpResponse()){}

    public insert = async (req:Request, res:Response) => {
        try{
            const province = await this.useCase.registerProvince(req.body)
            return this.httpResponse.Created(res, province)
        } catch (e){
            return this.httpResponse.Error(res, e)
        }
    }

    public findOne = async (req:Request, res:Response) => {
        try{
            const id = parseInt(req.params.id)
            const province = await this.useCase.findProvinceById(id)
            return  province ? this.httpResponse.Ok(res, province) : this.httpResponse.NotFound(res, "Province not found")
        } catch (e){
            return this.httpResponse.Error(res, e)
        } 
    }

    public findAll = async (_req:Request, res:Response) => {
        try{
            const provinces = await this.useCase.getAllProvinces()
            return provinces.length > 0 ? this.httpResponse.Ok(res, provinces) : this.httpResponse.NotFound(res, "No provinces found")
        } catch (e){
            return this.httpResponse.Error(res, e)
        }
    }

    public delete = async (req:Request, res:Response) => {
        try{
            const id = parseInt(req.params.id)
            const deleteResult = await this.useCase.deleteProvince(id)
            return deleteResult ? this.httpResponse.Ok(res, "Province deleted successfuly") : this.httpResponse.NotFound(res, "Province not found")
        } catch (e){
            return this.httpResponse.Error(res, e)
        }
    }

    public update = async (req:Request, res:Response) => {
        try{
            const id = parseInt(req.params.id)
            const fields = req.body
            const updatedProvince = await this.useCase.modifyProvince(id, fields)
            return updatedProvince ? this.httpResponse.Ok(res, updatedProvince) : this.httpResponse.NotFound(res, "Province not found")
        } catch (e){
            return this.httpResponse.Error(res, e)
        }
    }

    public addLocality = async (req:Request, res:Response) => {
        try{
            const id = parseInt(req.params.id)
            const locality = req.body
            const updatedProvince = await this.useCase.addLocality(id, locality)
            return updatedProvince ? this.httpResponse.Ok(res, updatedProvince) : this.httpResponse.NotFound(res, "Province not found")
        } catch (e){
            return this.httpResponse.Error(res, e)
        }
    }
}

export class countryController {

    constructor(
        private useCase:CountryUseCase, 
        private readonly httpResponse:HttpResponse = new HttpResponse()){}

    public insert = async (req:Request, res:Response) => {
        try{
            const country = await this.useCase.registerCountry(req.body)
            return this.httpResponse.Created(res, country)
        } catch (e){
            return this.httpResponse.Error(res, e)
        }
    }

    public findOne = async (req:Request, res:Response) => {
        try{
            const id = parseInt(req.params.id)
            const country = await this.useCase.findCountryById(id)
            return  country ? this.httpResponse.Ok(res, country) : this.httpResponse.NotFound(res, "Country not found")
        } catch (e){
            return this.httpResponse.Error(res, e)
        } 
    }

    public findAll = async (_req:Request, res:Response) => {
        try{
            const countries = await this.useCase.getAllCountries()
            return countries.length > 0 ? this.httpResponse.Ok(res, countries) : this.httpResponse.NotFound(res, "No countries found")
        } catch (e){
            return this.httpResponse.Error(res, e)
        }
    }

    public delete = async (req:Request, res:Response) => {
        try{
            const id = parseInt(req.params.id)
            const deleteResult = await this.useCase.deleteCountry(id)
            return deleteResult ? this.httpResponse.Ok(res, "Country deleted successfuly") : this.httpResponse.NotFound(res, "Country not found")
        } catch (e){
            return this.httpResponse.Error(res, e)
        }
    }

    public update = async (req:Request, res:Response) => {
        try{
            const id = parseInt(req.params.id)
            const fields = req.body
            const updatedCountry = await this.useCase.modifyCountry(id, fields)
            return updatedCountry ? this.httpResponse.Ok(res, updatedCountry) : this.httpResponse.NotFound(res, "Country not found")
        } catch (e){
            return this.httpResponse.Error(res, e)
        }
    }

    public addProvinces = async (req:Request, res:Response) => {
        try{
            const id = parseInt(req.params.id)
            const provinces = req.body
            const updatedCountry = await this.useCase.addProvinces(id, provinces)
            return updatedCountry ? this.httpResponse.Ok(res, updatedCountry) : this.httpResponse.NotFound(res, "Country not found")
        } catch (e){
            return this.httpResponse.Error(res, e)
        }
    }
}