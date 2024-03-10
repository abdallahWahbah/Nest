import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController 
{
    @Get("/hello")
    getRootRoute()
    {
        return "Hello Again"
    }

    @Get("/bye")
    sayBye()
    {
        return "Bye"
    }
}