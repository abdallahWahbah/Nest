import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {

    // #powerService: PowerService;
    // constructor(powerService: PowerService)
    // {
    //     this.#powerService = powerService
    // }

    // you can simpilfy the code above into

    constructor(private poweService: PowerService){}

    compute(a: number, b: number)
    {
        console.log("CPUService: we are making use of power service from Cpu Service");
        this.poweService.supplyPower(10);
        return a + b;
    }
}
