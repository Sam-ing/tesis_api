import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { UserProfile } from "./userProfile.model";

@Entity("country")
export class Country{
    
    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable:false})
    name:string

    @OneToMany(() => Province, (province) => province.country, {cascade:true})
    provinces:Province[] | undefined
}

@Entity("province")
export class Province{

    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable:false})
    name:string

    @OneToMany(() => Locality, (locality) => locality.province, {cascade:true})
    @JoinColumn()
    localities:Locality[] | undefined

    @ManyToOne(() => Country, (country) => country.provinces, {eager:true, nullable:false})
    @JoinColumn()
    country:Country
}

@Entity("locality")
export class Locality{

    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable:false})
    name:string

    @ManyToOne(() => Province, (province) => province.localities, {eager:true, nullable:false})
    @JoinColumn()
    province:Province
}

@Entity("adress")
export class Adress{
    @PrimaryGeneratedColumn()
    id:number

    @OneToOne(() => UserProfile, (userProfile) => userProfile.adress, {nullable:false})
    userProfile:UserProfile

    @ManyToOne(() => Country, (country) => country, {nullable:false, eager:true})
    @JoinColumn()
    country:Country

    @ManyToOne(() => Province, (province) => province, {nullable:false, eager:true})
    @JoinColumn()
    province:Province

    @ManyToOne(() => Locality, (locality) => locality, {nullable:false, eager:true})
    @JoinColumn()
    locality:Locality

    @Column({nullable:false})
    street:string

    @Column({nullable:false})
    number:string

    @Column()
    floor:string
}