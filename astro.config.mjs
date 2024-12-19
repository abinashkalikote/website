import { defineConfig } from 'astro/config';
import github from '@astro/github-integration';

export default defineConfig({
    integrations: [github()],
    base: '/website/'
});