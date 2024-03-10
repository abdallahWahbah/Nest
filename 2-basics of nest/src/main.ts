import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() // function that will run anytime that we run our application, a common convenstion to call it is bootstrap
{
    const app = await NestFactory.create(AppModule);
    await app.listen(3000) // listen for incoming traffic on a particular port in the computer
}

bootstrap();