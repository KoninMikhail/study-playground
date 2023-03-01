import {IConfigService} from "./config.interface";
import {DotenvParseOutput, config} from 'dotenv';

export class ConfigService implements IConfigService {
    private config: DotenvParseOutput;
    constructor() {
        const {error, parsed} = config();
        if(error){
            throw new Error('.ENV Not found')
        }
        if(!parsed){
            throw new Error('.ENV Empty')
        }
        this.config = parsed;
    }

    get(key: string): string {
       const res = this.config[key];
       if(!res) {
           throw new Error('API key not found')
       }
       return res;
    }
}