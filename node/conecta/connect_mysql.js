var mysql = require('mysql');

var con = mysql.createConnection({
  host: "172.17.0.2",
  user: "root",
  password: "mudar123",
  database: "twitter"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  var Twitter = require('twitter');

  var client = new Twitter({

    consumer_key: 'ojFx6BPJ2lPF1j6tY7UqdEBje',
    consumer_secret: 'DCbAv0ib6ietJxijhSo67XSlEgvwvuTDCqXyNvcz2Mm4xgLHvE',
    access_token_key: '1231041972087009280-ulRVoOfzB4F8Jf4XWaDVimmQm4oltd',
    access_token_secret: 'b5QFL13xiuWEcxTFI6lTlsmv6jawDpCs5IJOlelMfqGuP'
  });

  client.get('search/tweets', { q: '#docker #devops' }, function (error, tweets, response) {
    tweets.statuses.forEach(function (tweet) {

      resultado = [];
      res = tweet.user.name;
      res1 = tweet.user.followers_count;
      res2 = tweet.text;
      resultado = [res, res1, res2];

      const values2 = (resultado);
      //console.log(values);

      const sql = "INSERT INTO posts(usuario, seguidores, mensagem) VALUES ?";
      const values = [values2];
      con.query(sql, [values], function (error, results, fields) {
        if (error) return console.log(error);
        console.log('adicionou registros!');
        //con.end();//fecha a conexão
      });
    });

  });
});