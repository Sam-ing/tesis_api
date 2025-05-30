import { DeleteResult, UpdateResult } from "typeorm";
import { userProfileEntity } from "./userProfile.entity";

export interface userProfileRepository {
    findUserProfileById(id:number): Promise<userProfileEntity | null>;
    insertUserProfile(user:userProfileEntity): Promise<userProfileEntity | null>;
    deleteUserProfile(id:number): Promise<DeleteResult>;
    modifyUserProfile(id:number, fields:Object): Promise<UpdateResult>;
    listUserProfiles(): Promise<userProfileEntity[]>;
    findByEmail(email:string): Promise<userProfileEntity | null>;
}