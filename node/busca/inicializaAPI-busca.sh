echo "build da imagem que conecta na API do Twitter e recuperar os Twitters gravados no banco"
echo "######"
echo "######"
echo "######"
echo "######"
echo "######"

docker build -t busca .


echo "Inicializa o container de busca dos Twitters"

echo "######"
echo "######"
echo "######"
echo "######"
echo "######"

docker run --ip=192.168.0.8 --net=mynet -p 8080:8080 busca

echo "######"
echo "######"
echo "######"
echo "######"
echo "######"

echo "http://192.168.0.8:8080"
