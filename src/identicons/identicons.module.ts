import {Module} from '@nestjs/common';
import {IdenticonsService} from './identicons.service';

@Module({
  providers: [IdenticonsService],
  exports: [IdenticonsService],
})
export class IdenticonsModule {}
