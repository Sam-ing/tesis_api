import { userProfileEntity } from "../../domain/userProfile/userProfile.entity";
import { userProfileRepository } from "../../domain/userProfile/userProfile.repository";
import { userProfileValue } from "../../domain/userProfile/userProfile.value";
import bcrypt from "bcrypt";

export class UserProfileUseCase {
    constructor(private readonly userProfileRepository:userProfileRepository){}

    public async registerUserProfile(data:userProfileEntity){
        const password = await bcrypt.hash(data.password, 10)
        data.password = password
        const userProfile = new userProfileValue(data);                           
        const registeredUser = await this.userProfileRepository.insertUserProfile(userProfile)
        let newUserProfile = undefined
        if (registeredUser){
            newUserProfile = new userProfileValue(registeredUser)
        }else{
            newUserProfile = registeredUser
        }
        return newUserProfile
    } 

    public async findUserProfileById(id:number){
        const user = await this.userProfileRepository.findUserProfileById(id)
        let foundUser = undefined
        if (user){
            foundUser = new userProfileValue(user)
        }else{
            foundUser = user
        }
        return foundUser
    }

    public async deleteUserProfile(id:number){
        const deleteResult = await this.userProfileRepository.deleteUserProfile(id)
        return deleteResult.affected ?  true : false;
    }

    
    public async modifyUserProfile(id:number, fields:Object){
        const updateResult = await this.userProfileRepository.modifyUserProfile(id, fields)
        return updateResult.affected ?  (updateResult.affected > 0)  ?  this.findUserProfileById(id) : null : null
    }

    public async getAllUserProfiles(){
        const userProfiles = await this.userProfileRepository.listUserProfiles()
        let userProfilesList = undefined
        if (userProfiles){
            userProfilesList = userProfiles.map(s => new userProfileValue(s))
        }else{
            userProfilesList = userProfiles
        }

        return userProfilesList
    }
}