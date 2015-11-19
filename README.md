# JS Wallet #

Develompment version is available on [http://jswallet.herokuapp.com/](http://jswallet.herokuapp.com/)

##To start server##

* install mongodb
* start mongodb
* install node
* from jswallet repo run
        
        nmp install
        
* after run server:
        
        node server.js
        

Static files is available in public directory

Models are available in models directory

JS Wallet API is available on /api:

* _/api/transactions:GET_ - returns all transactions
* _/api/transactions/{id}_ - returns transaction with the given id(WIP)
* _/api/transactions:POST_ - add transaction


##TODO

* add value to transaction
* add type of transaction
* make pretty look to show transaction
* login by passport.js
* binding transaction with map location
* Deploy to heroku or other node.js supported free hosting
