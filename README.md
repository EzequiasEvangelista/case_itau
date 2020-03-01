# Case Itaú - SRE/DevOps

## Desafio

    1. Crie uma aplicação, em qualquer linguagem, para coletar as últimas postagens do Twitter, dada uma determinada #tag.
    a. Por padrão o Twitter disponibiliza as 100 últimas postagens. 
    b. Caso não tenha 100 twittes, colete todas que vierem.
    c. Não há necessidade de coletar mais do que 100 twittes, dada um #tag.


    2. Colete e armazene as mensagens no seu repositório de dados desejado (sql, nosql, etc), para as #tags listadas abaixo:
#cloud, #container, #devops, #aws, #microservices, #docker, #openstack, #automation, #gcp, #azure, #istio, #sre

    3. Utilizando uma linguagem de sua preferência, sumarize e grave os dados para conseguir listar quais são os 5 (cinco) usuários, da amostra coletada, que possuem mais seguidores, crie uma forma simples de exibir estes dados.

    4. Esta solução deve ser entregue em container

        a. Crie uma pipeline (Continuous Deployment) via Jenkins, Gitlab-CI, Code Build, CodePipeline (...) 
        b. Realize o maior número de testes que conseguir e empacote este container automaticamente a cada atualização de código da aplicação. 
        c. O Deployment deve ser feito preferencialmente via Canary ou Rolling com Health Check no Load Balancer/Proxy.


    5. Relatório Técnico explicando de forma sumarizada o trabalho realizado, considerando:

    I. Tecnologias utilizadas 
    • Linguagens, Versões, IDE's, SO's

    II. Diagrama da solução
    III. Publique os códigos gerados, em seu perfil do https://gitlab.com ou https://github.com/
    • Cite no relatório: O seu perfil gitlab ou gitHub e a(s) URL(s) onde se encontram os códigos gerados
    IV. Demais itens que você julgar relevante (Framework ou técnicas de teste, metodologias, padrões, etc.) 
    V. Publique em seu perfil do http://hub.docker.com as imagens finais
    • Cite no relatório: O seu perfil dockerHub e a(s) URL(s) onde se encontram as imagens geradas
    
    ## Possível solução
    
    Para realizar a busca das hashtags utilizei node.js com a biblioteca twitter. Através dessa biblioteca também realizei o acesso na API para se conectar|autenticar no Twitter e consumir a API. Para o banco de dados, foi utilizado o MySQL na versão 5.6 para gravar estes dados coletados do Twitter. Para recuperar estes dados com base no numero de seguidores e de forma decrescente também foi utilizado o node.js com a biblioteca express. 
As aplicações foram conteinerizadas através do Docker. 

# Como executar :

1 - Executar um git clone no repositório

> git clone https://github.com/EzequiasEvangelista/case_itau.git
    
    
    

