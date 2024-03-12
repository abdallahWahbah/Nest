import { Module } from '@nestjs/common';
import { DeskService } from './desk.service';
import { PowerModule } from 'src/power/power.module';

@Module({
  providers: [DeskService],
  imports: [PowerModule],
  exports: [DeskService]
})
export class DeskModule {}
