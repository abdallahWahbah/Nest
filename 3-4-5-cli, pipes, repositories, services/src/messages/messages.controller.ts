import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message.dtos';
import { MessagesService } from './messages.service';

// @Controller()
@Controller('messages')
export class MessagesController {

    // messageService: MessagesService;

    constructor(public messageService: MessagesService)
    {
        // DO NOT DO THIS ON REAL APPS, USE DEPENDENCY INJECTION
        // cause the service is creating its own dependencies
        // this.messageService = new MessagesService();
    }

    // @Get("/messages")
    @Get()
    listMessages()
    {
        return this.messageService.findAll();
    }

    // @Post("/messages")
    @Post()
    createMessage(@Body() body: CreateMessageDTO)
    {
        // console.log(body)
        return this.messageService.create(body.content);
    }

    // @Get("/messages/:id")
    @Get("/:id")
    async getMessage(@Param("id") id: string)
    {   
        // console.log(id)
        const message = await this.messageService.findOne(id);
        if(!message) throw new NotFoundException("Message Not Found...!")
        return message;
    }
}
