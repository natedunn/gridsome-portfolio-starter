import vueConfig from "./.temp/config";

export const config = {
  "env": process.env.NODE_ENV,
  "siteUrl": process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : vueConfig.siteUrl,
  "titleTemplate": vueConfig.titleTemplate,
}