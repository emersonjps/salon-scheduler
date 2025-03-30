import { PartialType } from '@nestjs/mapped-types';
import { CreateTimeGridDto } from './create-timegrid.dto';

export class UpdateTimeGridDto extends PartialType(CreateTimeGridDto) {}
