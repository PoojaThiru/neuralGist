import adapter from '@sveltejs/adapter-node';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
			},
			adapter: adapter(),
			// Content-Security-Policy: a nonce per render for kit's own inline scripts; nothing else inline runs.
			// Every external origin listed is one the site actually uses (Google Fonts, YouTube embeds, https images).
			csp: {
				mode: 'auto',
				directives: {
					'default-src': ['self'],
					'script-src': ['self'],
					'style-src': ['self', 'unsafe-inline', 'https://fonts.googleapis.com'],
					'font-src': ['self', 'data:', 'https://fonts.gstatic.com'],
					'img-src': ['self', 'data:', 'blob:', 'https:'],
					'frame-src': ['https://www.youtube-nocookie.com', 'https://www.youtube.com'],
					'frame-ancestors': ['none'],
					'object-src': ['none'],
					'base-uri': ['self'],
					'form-action': ['self'],
					'upgrade-insecure-requests': true
				}
			}
		})
	]
});
