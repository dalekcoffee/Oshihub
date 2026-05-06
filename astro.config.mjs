// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://hub.oshi.social',
  integrations: [
    starlight({
      title: 'OshiHub',
      logo: {
        src: './src/assets/OshiNetwork@72.png',
        replacesTitle: false,
      },
      favicon: '/favicon.png',
      customCss: ['./src/styles/custom.css'],
      expressiveCode: {
        themes: ['one-dark-pro'],
      },
      social: {
        discord: 'https://discord.gg/wuZemdgJTs',
      },
      sidebar: [
        { label: '🏠 Home', link: '/' },
        { label: '📶 Service Status', link: 'https://status.oshi.social/', attrs: { target: '_blank', rel: 'noopener' } },
        { label: '💬 Discord Community', link: 'https://discord.gg/wuZemdgJTs', attrs: { target: '_blank', rel: 'noopener' } },
        {
          label: 'Service Documentation',
          items: [
            {
              label: 'OshiSocial',
              collapsed: false,
              items: [
                { label: 'About OshiSocial', slug: 'oshisocial/about' },
                { label: 'Joining OshiSocial', slug: 'oshisocial/joining' },
                { label: 'Community Guidelines', slug: 'oshisocial/community-guidelines' },
                { label: 'OshiSocial How-to Guides', slug: 'oshisocial/how-tos' },
                { label: 'ListenBrainz Integration', slug: 'oshisocial/listenbrainz' },
                { label: 'OshiSocial Funding', slug: 'oshisocial/funding' },
                { label: 'OshiSocial Status Updates', slug: 'oshisocial/status-updates' },
                { label: 'DMCA, Reporting & Moderation', slug: 'oshisocial/dmca-moderation' },
                { label: 'Privacy Safety Reminder', slug: 'oshisocial/privacy-safety' },
                { label: 'Federation Transparency', slug: 'oshisocial/transparency' },
                { label: 'Terms of Service', slug: 'oshisocial/terms' },
                { label: 'Privacy Policy', slug: 'oshisocial/privacy-policy' },
                { label: 'Migration Guides', slug: 'oshisocial/migration-guides' },
                { label: 'History of OshiSocial', slug: 'oshisocial/history' },
              ],
            },
            {
              label: 'AMP Panel',
              collapsed: true,
              items: [
                { label: 'About', slug: 'oshipanel/about' },
                { label: 'Guides', slug: 'oshipanel/guides' },
                { label: 'Backups', slug: 'oshipanel/backups' },
              ],
            },
            {
              label: 'Zernio',
              collapsed: true,
              items: [
                { label: 'About Zernio', slug: 'zernio/about' },
                { label: 'X/Twitter API Setup', slug: 'zernio/twitter-api' },
                { label: 'Revoking Zernio Permissions', slug: 'zernio/revoking-access' },
              ],
            },
            {
              label: 'Carrd Pro',
              collapsed: true,
              items: [
                { label: 'About', slug: 'carrd-pro/about' },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
