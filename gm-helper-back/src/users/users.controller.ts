import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity/user.entity';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }

    @Get()
    getAllUsers() {
        return this.service.getAllUsers();
    }

    @Get(':id')
    getById(@Param() params: any) {
        return this.service.getUserById(params.id);
    }

    @Get('search/:username')
    getByUsername(@Param() params: any){
        return this.service.SearchUserByUsername(params.username)
    }

    @Post()
    create(@Body() user: User) {
        return this.service.createUser(user);
    }

    @Put()
    update(@Body() user: User) {
        return this.service.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param() params: any) {
        return this.service.deleteUser(params.id);
    }
}