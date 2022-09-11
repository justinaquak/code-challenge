# Answer
1. When a request with the correct parameters are received, send the transaction data to the sign data service. If sent, return HTTP `200 OK`, else return the corresponding HTTP 400-500 error. 
2. In the sign data service that receives the requests, it will make a RPC request to the blockchain node. When a success code is received, mark the transaction as passed, and when a failure code is received, mark it as failed. 
3. In the service, the failed transactions will be added to the pending transactions and retried every 60s. 
