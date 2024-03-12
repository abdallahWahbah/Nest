import { Module } from '@nestjs/common';
import { ComputerService } from './computer.service';
import { ComputerController } from './computer.controller';
import { CpuModule } from 'src/cpu/cpu.module';
import { DeskModule } from 'src/desk/desk.module';

@Module({
  providers: [ComputerService],
  controllers: [ComputerController],
  imports: [CpuModule, DeskModule]
})
export class ComputerModule {}
