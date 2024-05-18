export const config = {
  exportType: 'default',
  nameFormat: 'none',
  implementation: 'sass',
  additionalData: `@use "src/public/css/global.scss" as *;`,
  ignore: ['**/global.scss', '**/global/**']
}