/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://muhammad-ashraf.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        useragent: '*',
        allow: '/',
      },
    ],
  },
}
