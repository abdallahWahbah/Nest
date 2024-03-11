import {Injectable} from "@nestjs/common";
import {readFile, writeFile} from "fs/promises";

@Injectable()
export class MessagesRepository
{
    async findOne(id: string)
    {
        const contents = await readFile("messages.json", "utf8"); 
        // utf8: tells readFile what format or what encoding this file uses
        // "messages.json" file must exist or it will throw error
        const messages = JSON.parse(contents);
        return messages[id];
    }
    async findAll()
    {
        const contents = await readFile("messages.json", "utf8");
        const messages = JSON.parse(contents);
        return messages;
    }
    async create(comingMessage: string)
    {   
        const contents = await readFile("messages.json", "utf8");
        const messages = JSON.parse(contents);

        const id = Math.floor(Math.random() * 999);

        // {
        //     12: {content: "hi there",id: 12},
        //     50: {content: "new message",id: 50},
        // }
        messages[id] = { id, content: comingMessage}

        await writeFile("messages.json", JSON.stringify(messages));
        return messages;
    }
} 