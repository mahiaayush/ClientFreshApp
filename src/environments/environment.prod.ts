import env from './.env';

export const environment = {
  production: true,
  version: env.npm_package_version + '-dev',
  masterServerUrl: 'http://gatewaydevapi.corp.osoftec.com/api/master',
  commonServerUrl: 'http://gatewaydevapi.corp.osoftec.com/api/common',
  serverUrl: 'http://gatewaydevapi.corp.osoftec.com/api/security',
  coreBaseApiUrl: 'http://gatewaydevapi.corp.osoftec.com/api/base',
  envName: 'PROD',
  RazorKey: 'rzp_live_NsPdlgJCH7sDYM' 
}
