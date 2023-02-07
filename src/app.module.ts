import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as authModule from './auth/auth.module';
import { MatrixService } from './matrix/matrix.service';
import { MatrixController } from './matrix/matrix.controller';
import { MatrixModule } from './matrix/matrix.module';

@Module({
  imports: [authModule.AuthModule, MatrixModule],
  controllers: [AppController, MatrixController],
  providers: [AppService, MatrixService],
})
export class AppModule {}
