# IPFS Proxy Server

This proyect provide a proxy for IPFS node thar have the feature of log any request that is made. To achive this there are a server password protected where you could generate the api-key that you must use to go throu the proxy. Finaly, to contact the server I develope a little front-end where you could sign-up, login, create an api-key and watch all your api-keys and logs

## Installation

1. Install Docker https://docs.docker.com/engine/install/
2. Install Docker-Compose https://docs.docker.com/compose/install/
3. At the root of the repository run `docker-compose up`
   
## Use

### FrontEnd

You can navigate to http://localhost:3000 where you will find the developed front-end

### Proxy

The proxy will be at http://localhost:5000, you should add the api-key generated at the front-end like a header called `api-key`

# Written questions

Q: How would you improve this assignment for a production ready solution (e.g., security, deployment)?

A: There are some key point to improve in a production ready case. First of all, we could use something like kubernets to make the deployments tidy and fast. Second, we must improve the security, secrets have to be saved at a safeplace and we should avoid plaintext. Last but not least, we could improve the storage of logs and use some NoSQL database like mongoDB aparte from that we could use a better tool for visualization tasks

Q: Describe IPFS and compare it to other protocols e.g., HTTP?

A: While HTTP is aim to have all the data centralized at one server, IPFS want to descentralize the data using the nodes that are provided by the users like servers. IPFS have many advantages like, the high bandwidth ratio because the data is requested from the closest peer. The uploading of data doesn't require a host server, all the data is hosted at the nodes. Data is copied to multiple nodes so it improve the reliability. However have many disadvantage too, IPFS is not as popular as HTTPS yet and for that reason there are note many nodes. To acces to this new red, you need an HTTP to IPFS portal or run a node manually. Without a doub, it is a really promising technology and there hundred of oportunitys to improve and make big things.

