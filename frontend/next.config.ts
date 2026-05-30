import type { Config } from 'next'

const config: Config = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}
export default config
