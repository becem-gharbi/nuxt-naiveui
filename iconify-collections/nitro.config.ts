//https://nitro.unjs.io/config
export default defineNitroConfig({
    routeRules: {
        '/': { swr: 60 * 60 * 24 }
    }
});
