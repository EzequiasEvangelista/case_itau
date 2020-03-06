echo "build da imagem que conecta na API do Twitter e faz a conexão com o Banco"
echo "######"
echo "######"
echo "######"
echo "######"
echo "######"

docker build -t api-insere .


echo "Inicializa o container da api"

echo "######"
echo "######"
echo "######"
echo "######"
echo "######"

docker run --ip=192.168.0.9 --net=mynet -p 8888:8888 api-insere
