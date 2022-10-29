import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contacts } from './contacts/entities/contacts.entity';
import { ContactsModule } from './contacts/entities/contacts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: 'abcdefghij@50',
      database: 'db_agenda',
      entities: [Contacts],
      synchronize: true
    }),
    ContactsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
