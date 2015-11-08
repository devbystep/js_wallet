# JS Wallet #

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
