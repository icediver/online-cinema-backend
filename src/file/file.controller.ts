import { Controller, HttpCode, Post, Query, UploadedFile, UseInterceptors, UsePipes } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Auth } from 'src/auth/decorator/auth.decorator';
import { FileService } from './file.service';

@Controller('files')
export class FileController {
	constructor(private readonly fileService: FileService) {}

	@Post()
	@HttpCode(200)
	@Auth('admin')
	@UseInterceptors(FileInterceptor ('file'))
	async uploadFile(@UploadedFile() file: Express.Multer.File, @Query('folder') folder?: string) {
		return this.fileService.saveFiles([file], folder);
	}
}
