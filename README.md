# issue-16587

This repo demonstrates a bug when using a lbrary aliased via tsconfig paths with Next.js and vanilla-extract.

Running the example:
```
npm i
npm start
```

This will start the Next.js server at http://localhost:3000. There are links to two pages, one works, but the other is broken.

The pages are identical, except in the page that works, the component is in the `next-app` folder, where as the broken page imports from the `design` folder (aliased to `@design`).

Upon investigation, the only difference is that the `Box.css.ts` file is not processed by the vanilla-extract loader. It is being skipped due to this check https://github.com/vanilla-extract-css/vanilla-extract/blob/9cfb9a1/packages/webpack-plugin/src/loader.ts#L78-L84.

If you change the import from `@design` to `../../design/src/index` to skip the alias, it is still broken.


