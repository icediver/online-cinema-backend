import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { TypeMetadata } from 'class-transformer';
import { UserModel } from '../user.model';

type TypeData = keyof UserModel

export const User = createParamDecorator((data: TypeData, ctx: ExecutionContext) => {
	const request = ctx.switchToHttp().getRequest();
	const user = request.user;

	return data ? user[data] : user;
})