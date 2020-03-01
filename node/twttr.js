//const express = require('express');
//const app = express();
//const port = 3000;

//app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

var Twitter = require('twitter');

var client = new Twitter({
consumer_key: 'ojFx6BPJ2lPF1j6tY7UqdEBje',
consumer_secret: 'DCbAv0ib6ietJxijhSo67XSlEgvwvuTDCqXyNvcz2Mm4xgLHvE',
access_token_key: '1231041972087009280-ulRVoOfzB4F8Jf4XWaDVimmQm4oltd',
access_token_secret: 'b5QFL13xiuWEcxTFI6lTlsmv6jawDpCs5IJOlelMfqGuP'
});

client.get('search/tweets', {q: '#docker #devops'}, function(error, tweets, response) {
tweets.statuses.forEach(function(tweet) {
//console.log("Usuário: " + tweet + "tweet: " + tweet.text)
//console.log("Nome: " + tweet.user.name , "Seguidores: " + tweet.user.followers_count , "Tweetada: " + tweet.text)

resultado = [];
res = tweet.user.name;
res1 = tweet.user.followers_count;
res2 = tweet.text;
resultado = [res, res1, res2];


//console.log(JSON.stringify(resultado)); 

values = (JSON.stringify(resultado)); 
console.log(values);




//app.get('/', (req, res) => {
//res.send(tweet);
//});
});
});

