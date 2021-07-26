// One extra thing we'll have to do is tell TypeScript what .vue files will look like when they're imported.
// We'll do this with a vue-shims.d.ts file:
// Fixes import errors

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}