import { Injectable } from '@nestjs/common';

@Injectable()

export class ProfileService{
    profile(){
        return{
                fullname: 'Roni Eduardo',
                username: 'roniedu',
                description: 'Paixão por motos, carros e ouvir flashback',
                createAt: '2022-08-13'
        }
    }
}