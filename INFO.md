# learning webpack

inicialmente o webpack empacota todo seu códgo javascript em um único arquivo javascript otimizado. Esse é o comportamento padrão, sem a necessidade de qualquer configuração. Como standard ele procuja um index.js file in src folder, ele gera um main.js e o põe na /dist folder.

Para recursos mais avançados, devemos criar um novo documento de configuração, essencialmente um arquivo JS que exporta um Objecto com as options

To bundle the project you need type webpack in your terminal