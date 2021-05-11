import {Inject, Injectable} from '@nestjs/common';
import {ConfigType} from '@nestjs/config';
import {URL} from 'url';
import {ImageproxyConfig} from './imageproxy.config';

@Injectable()
export class ImageproxyService {
  constructor(
    @Inject(ImageproxyConfig.KEY)
    private readonly config: ConfigType<typeof ImageproxyConfig>,
  ) {}

  proxy(baseUrl: string): string {
    return new URL(`/${baseUrl}`, this.config.baseUrl).toString();
  }
}
