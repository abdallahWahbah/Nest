import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";

@Injectable()
export class MessagesService
{
    messageRepo: MessagesRepository;

    constructor(messageRepo: MessagesRepository)
    {
        // DO NOT DO THIS ON REAL APPS, USE DEPENDENCY INJECTION
        // cause the service is creating its own dependencies
        // this.messageRepo = new MessagesRepository();

        this.messageRepo = messageRepo;
    }

    async findOne(id: string)
    {
        return this.messageRepo.findOne(id)
    }

    async findAll()
    {
        return this.messageRepo.findAll();
    }

    async create(message: string)
    {
        return this.messageRepo.create(message);
    }
}