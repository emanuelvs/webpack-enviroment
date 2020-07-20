# learning webpack

inicialmente o webpack empacota todo seu códgo javascript em um único arquivo javascript otimizado. Esse é o comportamento padrão, sem a necessidade de qualquer configuração. Como standard ele procuja um index.js file in src folder, ele gera um main.js e o põe na /dist folder.

Para recursos mais avançados, devemos criar um novo documento de configuração, essencialmente um arquivo JS que exporta um Objecto com as options

To bundle the project you need type webpack in your terminal

Para carregar assets como css por exemplo, dinamicamente, precisaremos de loaders que fica nas configurações de module dentro de rules, cada rule deve contém um atributo test, que carrega um regex para identificar os arquivos que seram carregados pelo loader, e o atributo use que é um array de loaders.
No use case do css temos que instalar dois loaders, "style-loader and css-loader";

Com os mesmos conceitos que aprendemos com a utilização de arquivos css de maneira dinâmica em nossos files JS, podem carregar imagens, existem alguns loaders para esse propósitos, mas utilizaremos o file-loader