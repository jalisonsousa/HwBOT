## Changelog

* v0.3.1.4 - Removido idiomas Alemão e Grego. Mantido apenas Português e inglês. 
    * Resposta dos enigmas padrão no idioma Português.
    * Adicionado link direto para o site [Filtro IPS](https://filtroips.pages.dev) no rodape do bot.
* v0.3.1.3 - Correções nos Intervalos de Missões
* v0.3.1.0 - Corrigido alguns bugs/traduções, adicionados novos quebra-cabeças e DDOs novamente
* v0.3.0.0 - Renomeado para hwbot, pequenas melhorias e ajustes de projeto para evitar banimento
* v0.2.10.1 - Ignorado erro 503 da página.
* v0.2.10 - `create_file(name, content)` criado para Webcrawler.
* v0.2.9 - Hexbot conectado à versão do servidor Notificar.
* v0.2.8 - Monitor de e-mails adicionado. Sons adicionados para e* ventos importantes.
* v0.2.7 - Botão de aceitar missão corrigido. Mais quebra-cabeças.
* v0.2.6 - Mais quebra-cabeças e limpeza de logs corrigidos para missões.
* v0.2.5 - Mais quebra-cabeças e missões corrigidas um pouco.
* v0.2.4 - Upload de software corrigido para webcrawler.
* v0.2.3 - Novo quebra-cabeça adicionado. (Cachorro do Renato 💔)
* v0.2.2 - Sequência de interceptação corrigida.
* v0.2.1 - Sequência de missões corrigida.
* v0.2 - Adaptado para Hacker Wars após [gresendesa](https://github.com/gresendesa) atualizar [jSpaghetti](https://github.com/gresendesa/jSpaghetti). Agora funciona em navegadores mais recentes. O editor de scripts do Webcrawler agora usa o [Ace editor](https://ace.c9.io/). Bot conectado ao servidor usando a tecnologia [socket.io](https://socket.io/).
* v0.1.35.1
    * Erro freehd do Webcrawler corrigido
* v0.1.35
    * Erro freehd do Webcrawler corrigido (beta)
    * Traduzido para Alemão
* v0.1.34 - Proteção contra página do CloudFlare.
    * O bot recarrega a página a cada 3 segundos se houver uma página do CloudFlare.
    * Novas funções do webcrawler adicionadas: clean_logs_just_after_installing(), clean_logs_disabled() e leave_signature().
* v0.1.33 - Scripts personalizados do Webcrawler (BETA)
* v0.1.32 - Comportamento do botão do Bot alterado para abrir/fechar a janela. Wiki implementada.
* v0.1.31 - Área de configurações criada e implementadas as sugestões do [MentalMushrooms suggestions](https://github.com/fkapitalism/HExBot/issues/2).
    * Checkbox para alternar o comportamento de aparecer o bot após instruções;
    * Webcrawler agora adiciona automaticamente IPs verificados na seção "Ignorar estes IPs".
* v0.1.30 - Bot original implantado com chat removido por motivos de desempenho.
* v0.1.26 - Sequência de missão de exclusão de software implementada.
* v0.1.25.2 - Corrigindo problema da última atualização. Se a opção de ocultar logs de upload (caixa de seleção do webcrawler) estivesse ativa e a instalação falhasse, os logs de upload não seriam limpos.
* v0.1.25.1 - Apenas alguns ajustes
* v0.1.25 - Adicionadas duas caixas de seleção relacionadas ao webcrawler e seus uploads.
    * Uma caixa de seleção para pular a ocultação de logs após o upload (Direto para a instalação após verificar que foi enviado com sucesso)
    * Uma caixa de seleção para pular a ocultação do software enviado (Assim como a ocultação de logs, já que não há nada para ocultar) após uma instalação bem-sucedida
* v0.1.24.1 - Problema de botões que desaparecem reparado
* v0.1.24 - Canal de comunicação implementado
* v0.1.23 - Solucionador automático de caminho de charada. Agora o bot resolve as charadas e atualiza automaticamente o cracker durante o processo.
* v0.1.22.3 - Atualização de desempenho
* v0.1.22.2 - Atualização de desempenho
* v0.1.22.1 - Atualização de desempenho
* v0.1.22 - Traduzido para o Português
* v0.1.21 - Transferir o dinheiro ganho para carteira BTC
    * Transferir o dinheiro ganho para carteira BTC durante missões e acampamentos bancários
* v0.1.20.1 - Bug de armazenamento corrigido
* v0.1.20 - ATUALIZAÇÃO DE SEGURANÇA CRÍTICA
    * Atualização do jSpaghetti agora permite que o bot use script em segundo plano em vez de sessionStorage, o que poderia ser percebido pelo servidor do jogo. O bot já está usando script em segundo plano como armazenamento de dados.
    * A função sendXMLHttpRequest foi reescrita para enviar opcionalmente o cabeçalho X-Requested-With. Isso permite que o bot imite melhor o comportamento do jogo, enviando este cabeçalho quando necessário.
    * Então, os técnicos da HE terão mais dificuldade para nos rastrear.
    * Equipe, monitore os cabeçalhos das solicitações do jogo e procure por novos cabeçalhos. Os técnicos da HE poderiam criar esses cabeçalhos para saber quem não está enviando esses cabeçalhos (Se o bot não estiver enviando esses cabeçalhos, então pode ser rastreado).
* v0.1.19 - Campos de IPs a serem ignorados adicionados
* v0.1.18.1 - Atualização do jSpaghetti
* v0.1.18 - Modo stealth implementado
    * Sequências de missão roubam o dinheiro da conta-alvo
* v0.1.17.1 - Filtro de regex para saída do webcrawler
* v0.1.17 - Funcionalidade de assinatura adicionada
* v0.1.16.2 - Problema de Mishchap corrigido
* v0.1.16.1 - Atualização do Webcrawler
* v0.1.16 - Uploader e webcrawler unidos
* v0.1.15.3 - Área de créditos adicionada
* v0.1.15.2 - Sequências de missão corrigidas
    * O bot não estava fazendo login em contas bancárias
* v0.1.15.1 - Atualização de sequências de monitoramento
* v0.1.15 - Monitor de missão e monitor de logs implementados
* v0.1.14.1 - Atualização de sequências de missão
* v0.1.13.2 - Uploader corrigido
    * O bot não estava ignorando os IPs inexistentes, então sempre estava passando por 1.2.3.4.
* v0.1.13.1 - Muitos bugs corrigidos
* v0.1.13 - Botão de alerta adicionado
* v0.1.12 - Atualização do Webcrawler
* v0.1.11 - Atualização do Webcrawler
* v0.1.10 - Módulo Webcrawler implementado
* v0.1.9 - Atualização do núcleo
    * Agora o bot roda sobre a API do jSpaguetti
* v0.1.8 - Primeira versão estável
