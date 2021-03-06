require('dotenv').config();

const siteMetadata = {
  title: `Blog by Chintan Prajapati`,
  name: `Chintan Prajapati`,
  siteUrl: `https://www-eight.vercel.app`,
  description: `This is my description that will be used in the meta tags and important for search results`,
  hero: {
    heading: `Blog Posts`,
    maxWidth: 652,
  },
  social: [
    {
      url: `https://twitter.com/`,
    },
    {
      url: `https://behance.com/`,
    },
    {
      url: `https://github.com/`,
    },
    {
      url: `https://instagram.com/`,
    },
    {
      url: `https://www.linkedin.com/company/`,
    },
    {
      url: `https://dribbble.com/`,
    },
    {
      url: `https://youtube.com`,
    },
    {
      name: 'stackoverflow',
      url: `https://stackoverflow.com`,
    },
    {
      url: `https://digitalocean.com`,
    },
    {
      url: `https://tripadvisor.com`,
    },
    {
      url: `https://notion.so`,
    },
    {
      name: `mailto`,
      url: `mailto:`,
    },
  ],
};

const plugins = [
  {
    resolve: '@narative/gatsby-theme-novela',
    options: {
      contentPosts: 'content/posts',
      contentAuthors: 'content/authors',
      rootPath: '/',
      basePath: '/',
      authorsPage: true,
      mailchimp: true,
      sources: {
        local: true,
        contentful: false,
      },
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Novela by Narative`,
      short_name: `Novela`,
      start_url: `/`,
      background_color: `#fff`,
      theme_color: `#fff`,
      display: `standalone`,
      icon: `src/assets/favicon.png`,
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: 'UA-118232427-3',
    },
  },
  {
    resolve: 'gatsby-plugin-mailchimp',
    options: {
      endpoint:
        'https://narative.us19.list-manage.com/subscribe/post?u=65ef169332a03669b9538f6ef&amp;id=c55c426282',
    },
  },
];

/**
 * For development purposes if there's no Contentful Space ID and Access Token
 * set we don't want to add in gatsby-source-contentful because it will throw
 * an error.
 *
 * To enanble Contentful you must
 * 1. Create a new Space on contentful.com
 * 2. Import the Contentful Model from @narative/gatsby-theme-novela/conteful
 * 3. Add .env to www/ (see www/env.example)
 * 4. Enable contentful as a source in this file for @narative/gatsby-theme-novela
 */
if (process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN) {
  plugins.push({
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  });
}

module.exports = {
  siteMetadata,
  plugins,
};
