import { IsNotEmpty, isEmail } from "class-validator";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'contacts'})
export class Contacts{

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({nullable: false})
    telNumber: string;

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    name: string;


    @Column({length: 255, nullable: true})
    email: string;

    @Column({length: 255, nullable: true})
    image: string;
}