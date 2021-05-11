import {registerAs} from '@nestjs/config';

export const ImageproxyConfig = registerAs('imageproxy', () => ({
  baseUrl: process.env.IMAGEPROXY_BASE_URL,
}));
