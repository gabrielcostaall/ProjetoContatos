import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Patch, Post, Put, ValidationPipe } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Contacts } from "src/contacts/entities/contacts.entity";
import { Repository } from "typeorm";

@Controller('/contacts')
export class ContactsController{
    constructor (@InjectRepository(Contacts) private model: Repository<Contacts>){

    }

    @Post()
    public async create(@Body() body: Contacts): Promise <Contacts> {
        const contactCreated = await this.model.save(body)
        return contactCreated;
    }

    @Get()
    public async findAll(): Promise<Contacts[]> {
        const list = await this.model.find()
        return list;
    }

    @Get(':id')
    public async findOne(@Param('id', ParseIntPipe) id:number): Promise<Contacts> {
        const contact = await this.model.findOne({where: {id}})
        
        if (!contact){
            throw new NotFoundException("Contato não encontrado");
        }
        return contact;
    }

    @Put(':id')
    public async update(@Param('id', ParseIntPipe) id:number, @Body() body: Contacts): Promise<Contacts> {
        const contact = await this.model.findOne({ where: {id}})
        
        if (!contact){
            throw new NotFoundException("Contato não encontrado");
        }

        await this.model.update({id}, body)

        return await this.model.findOne({ where: {id}});
    }

    @Delete(':id')
    public async delete(@Param('id', ParseIntPipe) id:number): Promise<String> {
        const contact = await this.model.findOne({ where: {id}})
        
        if (!contact){
            throw new NotFoundException("Contato não encontrado");
        }
        
        await this.model.delete(id);
        return 'Contato deletado!';
    }
}