import { defineConfig, loadEnv } from 'vite'
import path from 'path'


export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());
    return {
        base: `/angelmontemayordavila/`,
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            }
        },
        css: {
            modules: {
                localsConvention: 'camelCase'
            }
        },
        server: {
            proxy: {
                '/socket.io': {
                    target: env.VITE_API_URL,
                    ws: true,
                    changeOrigin: true
                }
            }
        }
    };
});