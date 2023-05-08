import { defineBuildConfig } from "unbuild"

export default defineBuildConfig({
  entries: [
    "src/module"
  ],
  externals: [
    "@auth/core",
    "nuxt",
    "nuxt/schema",
    "vite",
    "@nuxt/kit",
    "@nuxt/schema",
    // Type only
    "vue",
    "vue-router",
    "unstorage",
    "nitropack"
  ],
  rollup: {
    inlineDependencies: true
  }
})