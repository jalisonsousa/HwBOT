<div align="center">

  <img src="HwBot.png" alt="Glyder logo" width="150px" />
  
  # HwBOT

  Um bot para automatizar as coisas para [Hacker Wars](hackerwars.io).

  ### Ultima Atualização: 21/04/2024
  ---
</div>

## Visão geral

Funcionalidades:

* Resolve caminho de enigmas
* Faz missões do jogo
    * Missões difíceis e médias
    * Missões muito fáceis - Excluir ou roubar software 
* Intercepta transações bancárias
* Executa uploads massivos
* Limpa logs
* Coleta informações de ips e software em toda a rede
* Notifica sobre novas missões e atividades estranhas nos logs
* Transfere o dinheiro ganho para a carteira BTC automaticamente
* Scripts de usuário personalizados

## Como instalar
Deve ser instalado como uma extensão do Google Chrome.

1. Vá para chrome://extensões/
2. Marque a caixa de seleção 'Modo de desenvolvedor'
3. Clique em 'Carregar extensão descompactada...'
4. Carregue o diretório descompactado

## Privacidade
Esta extensão NÃO coleta nenhuma informação pessoal ou sensível sobre os usuários. Verifique o código. Abra um problema se tiver alguma dúvida.

## Conexão com a Internet

Esta extensão está conectada a um servidor da web usando a tecnologia socket.io. Atualmente, este servidor notifica quando uma nova versão está disponível. Novos recursos em breve.

## Histórico

Desde 2015, este projeto tem sido um bot muito popular entre os jogadores do Hacker Experience. Agora, o projeto original foi adaptado para funcionar no Hacker Wars. Obrigado a todos os contribuidores.

## Como contribuir
O bot é inteiramente escrito com [jSpaghetti](https://github.com/gresendesa/jSpaghetti) API. jSpaghetti fornece uma maneira modular e declarativa de escrever scripts.
Existem duas maneiras de adicionar novas funcionalidades.
* Criando de uma nova sequência em um módulo existente para funcionalidade relacionada;
* Criando um módulo para construir uma nova funcionalidade.

License
---
Licenciado sob  MIT.

[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg?style=for-the-badge)](https://github.com/exteraDev/HwBOT/blob/main/LICENSE)
