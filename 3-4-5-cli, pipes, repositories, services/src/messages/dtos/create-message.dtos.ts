import { IsString } from "class-validator"; 

// DTO >>>> Data Transfer Object
export class CreateMessageDTO
{
    @IsString()
    content: string
}