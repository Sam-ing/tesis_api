import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("userProfile")
export class UserProfile {

    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable:false})
    firstName:string
    
    @Column({nullable:false})
    lastname:string

    @Column({nullable:false})
    email:string

    @Column({nullable: false})
    password:string

    @Column()
    phoneNumber:string

    /*
    @OneToOne(() => Adress, (adress) => adress.userProfile, {eager:true, cascade:true})
    @JoinTable()
    adress:Adress
    */

    @Column({nullable: true})
    adress:string
}