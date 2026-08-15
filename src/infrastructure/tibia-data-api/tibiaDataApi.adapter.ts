import { HttpService } from '@nestjs/axios';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { Agent } from 'https';


@Injectable()
export class TibiaDataApiAdapter {
    private readonly baseUrl: string;
    private readonly agent: Agent;
    constructor(private readonly httpService: HttpService) {
        this.baseUrl = 'https://api.tibiadata.com';
        this.agent = new Agent({ rejectUnauthorized: false });
    }

    async getCharacter(name: string) {
        const url = `${this.baseUrl}/v4/character/${name}`
        try {
            const { data } = await firstValueFrom(
                this.httpService.get(url, {
                    httpsAgent: this.agent
                })
            );
            return data;
        } catch (error) {
            console.log(error);
            throw new HttpException(
                'Could not fetch character from TibiaDataApi',
                HttpStatus.BAD_GATEWAY
            );
        }
    }

    async getWorld(name: string) {
        const url = `${this.baseUrl}/v4/world/${name}`
        try {
            const { data } = await firstValueFrom(
                this.httpService.get(url, {
                    httpsAgent: this.agent
                })
            );
            return data;
        } catch (error) {
            console.log(error);
            throw new HttpException(
                'Could not fetch world from TibiaDataApi',
                HttpStatus.BAD_GATEWAY
            );
        }
    }
}