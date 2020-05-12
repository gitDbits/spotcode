# Spotcode

![Screenshot](https://i.imgur.com/jpkvJL8.png)

Projeto inspirado no Spotify, seguindo a estrutura do backend API Ruby on Rails e frontend em React. Neste projeto você poderá:
 
* Ouvir as suas músicas pelo seu estilo favorito.

* Ouvir as músicas tocadas recentemente.

* Ouvir as músicas recomendadas.

* Conferir as músicas separadas por álbums e artistas e seus diferentes estilos.

* Favoritar as suas músicas, albums e artistas e conferir essa lista.

* Poderá tocar as musicas aleatoriamente.

* Realizar busca pelo nome: |Musica| |Artista| |Album|.

* Login e cadastro de usuaŕio e suas validações.

O projeto foi desenvolvido na semana full stack da OneBit Code :)

## Vamos lá

Verifique os requisitos abaixo, fique a vontade para realizar o clone do projeto e realizar suas modificações.

### Pré requisitos

* Ruby 2.5.3

* Rails 6.0.2

Caso não tenha o Rails instalado, só seguir as seguintes dicas: 

* [Ruby on Rails Ubuntu](https://gorails.com/setup/ubuntu/18.04)
* [Ruby on Rails Windows](https://gorails.com/setup/windows/10)
* [Ruby on Rails Mac OS](https://gorails.com/setup/osx/10.15-catalina)

### Setup básico Linux

Após a instalação do Rails, abra o seu terminal e execute os seguintes comandos:

- Acessando a sua pasta home
```
cd
```
- Clone do projeto no github
```
git clone https://github.com/gitDbits/spotcode
```
- Acesse a pasta spotcode
```
cd spotcode
```
- Instalado a dependências GEMS
```
bundle install 
```

- Instalando o YARN
```
yarn install
```
- Os arquivos para utilização na aplicação spotcode: |Músicas|Imagem artista|Imagem album| pode ser realizado, no link abaixo;
- Download [cliquei aqui](https://drive.google.com/open?id=1qp4bzU7nYr2P9cM__3SSH16xGCwneP3S) 
```
Após realizar o download da pasta seed_files, mover para a pasta /spotcode/tmb/
```
- Criar o banco de dados
```
rails db:create
```

- Rodar as migrations
```
rails db:migrate
```
- Executar script inicial, neste arquivo você pode conferir as informações iniciais para o projeto spotcode/db/seeds.rb
```
rails db:seed
```

- Instalar o webpacker 
```
bundle exec rails webpacker:install
```

- Executar a aplicação 
```
rails s
```
- Atualizar navegador automaticamente, após uma alteração no código: Basta abrir um outro terminal e executar o seguinte comando:  
```
bin/webpack-dev-server 
```
## Construido com

* [Ruby on Rails](http://www.dropwizard.io/1.0.2/docs/) - The Ruby on Rails framework for API

* [React](https://github.com/facebook/react/blob/master/README.md) - React is a JavaScript library for building user interfaces.

* [Web Packer Rails](https://github.com/rails/webpacker) - Web Packer Rails

* [JBuilder](https://github.com/rails/jbuilder/blob/master/README.md) - JSON structures that beats manipulating giant hash structures

* [Devise](https://github.com/heartcombo/devise) - Flexible authentication solution for Rails with Warden

* [Rack-cors](https://github.com/cyu/rack-cors) - Rack Middleware for handling Cross-Origin Resource Sharing (CORS)

* [Toast-rails](https://github.com/tylergannon/toastr-rails) - Messages beautiful based toasttrjs

