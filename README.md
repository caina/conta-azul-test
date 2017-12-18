[![Build Status](https://travis-ci.org/caina/conta-azul-test.svg?branch=master)](https://travis-ci.org/caina/conta-azul-test)
# ContaAzul
App para a prova teste da conta azul

## Arquitetura

Iremos utilizar para este aplicativo uma arquitetura de Stateless e Statefull components, nossos componentes dentro da pasta "scenes" são containers de tela, que representam paths que podemos acessar pela url.

seus componentes internos apenas irão representar o estilo do aplicativo, sendo possível um melhor reaproveitamento dos mesmos.

## Lazy Load
Nossas rotas estão configuradas para trabalhar de maneira com que um componente de tipo cena seja carregado apenas quando requisitado, diminuindo o consumo de memódia da aplicação.
