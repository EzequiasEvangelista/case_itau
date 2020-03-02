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

Pré-requisitos : Utilizar o Docker e S.O Linux. Caso não for executar os testes com o usuário root, rodar o seguinte comando :

> sudo usermod -aG docker your-user

1 - Executar um git clone no repositório

> git clone https://github.com/EzequiasEvangelista/case_itau.git

2 - Em seguida entre no diretório case_itau 

> cd case_itau

Criei uma imagem Docker para o banco de dados e esta imagem tem um script de Schema do Banco onde esse schema cria o banco de dados twitter e a tabela posts e as colunas ID, usuario, seguidores e mensagem.

3 - Em seguida é necessário subir o serviço de banco de dados conforme os passos abaixo :

Acessar diretório 
> cd banco/my-mysql

Preparar ambiente de rede para estabelecer conexão entre os containers 

> docker network create --driver=bridge --subnet=192.168.0.0/24 --gateway=192.168.0.1 mynet


Buildar a imagem
> docker build -t mysql .

Inicializar o container 
> docker run --ip=192.168.0.10 --net=mynet -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=mudar123 -e MYSQL_ROOT_HOST=%mysql

Verificar se o container subiu
> docker ps

Exemplo:

docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
6f84421b80e6        mysql               "docker-entrypoint.s…"   25 hours ago        Up 25 hours         0.0.0.0:3306->3306/tcp   charming_nash


Acessar o container
> docker exec -it [CONTAINER ID] bash

Acessar o banco de dados
> mysql -u root -p [senha do banco de dados]

Exibir o banco twitter que foi criado

> mysql> show databases;

![show-database](https://user-images.githubusercontent.com/14968618/75635003-6cdead00-5bf1-11ea-9c9c-0edfabb10f4f.png)

Entrar no banco twitter:

> mysql> use twitter;

Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed

A tabela posts foi criada com os seguintes campos : 

> describe posts;

![describe](https://user-images.githubusercontent.com/14968618/75635091-158d0c80-5bf2-11ea-91db-cd37034a69f3.png)



Para verificar os registros pode ser executado um select com o seguinte formato :

> select * from posts; 



# Configurações do container que faz a busca dos tweets e a gravação no banco de dados


    
    
    

