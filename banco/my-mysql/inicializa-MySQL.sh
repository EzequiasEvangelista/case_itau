echo  "Faz a configuração de rede para os containers"
echo "######"
echo "######"
echo "######"
echo "######"
echo "######"
docker network create --driver=bridge --subnet=192.168.0.0/24 --gateway=192.168.0.1 mynet


echo "build da imagem mysql"
echo "######"
echo "######"
echo "######"
echo "######"
echo "######"

docker build -t mysql .


echo "Inicializa o container do MySQL"

echo "######"
echo "######"
echo "######"
echo "######"
echo "######"

docker run --ip=192.168.0.10 --net=mynet -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=mudar123 -e MYSQL_ROOT_HOST=% mysql
