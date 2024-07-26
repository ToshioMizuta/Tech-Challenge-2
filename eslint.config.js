import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,

  {
    "env": {
      "browser": true,
      "es2021": true,
      "node": true,
      "commonjs": true
    }
}

];

