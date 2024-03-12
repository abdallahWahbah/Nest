import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComputerModule } from './computer/computer.module';
import { CpuModule } from './cpu/cpu.module';
import { DeskModule } from './desk/desk.module';
import { PowerModule } from './power/power.module';

@Module({
  imports: [ComputerModule, CpuModule, DeskModule, PowerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
