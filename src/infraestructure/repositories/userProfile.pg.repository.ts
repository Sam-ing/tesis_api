import { userProfileEntity } from "../../domain/userProfile/userProfile.entity";
import { userProfileRepository } from "../../domain/userProfile/userProfile.repository";
import { UserProfile } from "../models/userProfile.model";
import { AppDataSource } from "../database/postgres";
import { DeleteResult, Repository, UpdateResult } from "typeorm";

export class userProfilePGRepository implements userProfileRepository {
    repository: Repository<UserProfile>;
    
    constructor(){
        this.repository = AppDataSource.getRepository(UserProfile)
    }


    async findUserProfileById(id: number): Promise<userProfileEntity | null> {
        const foundUserProfile = await this.repository.findOne({where: {id: id}})
        return foundUserProfile
    }
    
    async insertUserProfile(user: userProfileEntity): Promise<userProfileEntity | null> {
        const newUserProfile = await this.repository.create(user)
        const savedUserProfile = await this.repository.save(newUserProfile)
        return savedUserProfile
    }
    
    async deleteUserProfile(id: number): Promise<DeleteResult> {
        const deleteResult = await this.repository.delete(id)
        return deleteResult
    }
    
    async modifyUserProfile(id:number, fields: Object): Promise<UpdateResult> {
        const updateResult = await this.repository.update(id, fields)
        return updateResult
    }
    
    async listUserProfiles(): Promise<userProfileEntity[]> {
        const foundUserProfiles = await this.repository.find()
        return foundUserProfiles
    }

    async findByEmail(email: string): Promise<userProfileEntity | null> {
        return await this.repository.findOne({ where: { email } });
  }
    
}