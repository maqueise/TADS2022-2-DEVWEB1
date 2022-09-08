export default {
    root: 'src',
    build: {
        outDir: '../dist',
        rollupOptions: {
            input: {
                index: 'src/index.html',
                domParte01: 'src/dom-parte1.html'
            },
            output: {
                entryFileNames: 'js/[hash][extname]',
                chunkFileNames: "js/[hash].extname]",
                assetFileNames: 'css/[hash][extname]',

            }

        }
    }
}

/*resolve: {
    alias: {
        '@css': path.resolve(__dirname, './src/css/')
    },
},*/

/* 

 build: {
        outDir,
        rollupOptions: {
            input: {
                index: resolve(root, "index.html"),
                login: resolve(root, "login.html")
            }
        }
    }*/