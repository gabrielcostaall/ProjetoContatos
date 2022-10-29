import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ContactsController } from "src/controllers/contacts.controller";
import { Contacts } from "./contacts.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Contacts])],
    controllers: [ContactsController],
    providers: [],
    exports: [TypeOrmModule]
})
export class ContactsModule{

}