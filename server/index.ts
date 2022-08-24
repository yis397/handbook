
import { ApolloServer } from "apollo-server-express";
const { graphqlUploadExpress } = require("graphql-upload-minimal");
import resolvers from "./graphql/resolver";
import express from "express";
import {typeDefs} from "./graphql/schema";
import { verifyToken } from './utils/jwsToken';
import mongoose from 'mongoose';
import { SubscriptionServer } from "subscriptions-transport-ws";
import { useServer } from 'graphql-ws/lib/use/ws';
import { makeExecutableSchema  } from "@graphql-tools/schema";
import { ApolloServerPluginDrainHttpServer   } from "apollo-server-core";
import ws from "ws"
import http from "http"
import  { buildSchema, execute, subscribe } from "graphql"
import { PubSub } from "graphql-subscriptions";
require("dotenv").config({path:".env"})

mongoose.connect(process.env.MONGO_URL||"",{},(Error )=>{
    if (Error) {
        console.log("Error de conexion");
      } else {

        server(typeDefs, resolvers);
      }
}
)

const server=async(typeDefs, resolvers)=>{
  // Required logic for integrating with Express
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  const app = express()
  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }))
  const httpServer = http.createServer(app);
  const pubsub = new PubSub();

  // Same ApolloServer initialization as before, plus the drain plugin.
  const server = new ApolloServer({

      schema,
      context:async ({req})=>{
          
          const token=req.headers.authorization
          if (token) {
         
            try {
              const user= await verifyToken(token ,(process.env.SECRET_KEY as any));
              return {user,pubsub}
            } catch (error) {
              throw new Error("token invalido");
              
            }
            
          }
        },
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer }), {
          async serverWillStart() {
              return {
                  async drainServer() {
                      subscriptionServer.close();
                  }
              };
          }
      }],
  });

  const subscriptionServer = SubscriptionServer.create({
      // This is the `schema` we just created.
      schema,
      // These are imported from `graphql`.
      execute,
      subscribe,
      // Providing `onConnect` is the `SubscriptionServer` equivalent to the
      // `context` function in `ApolloServer`. Please [see the docs](https://github.com/apollographql/subscriptions-transport-ws#constructoroptions-socketoptions--socketserver)
      // for more information on this hook.
      async onConnect(
          connectionParams,
          webSocket,
          context
      ) {
          console.log('Connected!');
          // If an object is returned here, it will be passed as the `context`
          // argument to your subscription resolvers.
          return {
              pubsub
          }
      },
      onDisconnect(webSocket, context) {
          console.log('Disconnected!')
      },
  }, {
      // This is the `httpServer` we created in a previous step.
      server: httpServer,
      // This `server` is the instance returned from `new ApolloServer`.
      path: server.graphqlPath,
  });

  // More required logic for integrating with Express
  await server.start();
  server.applyMiddleware({
      app,

      // By default, apollo-server hosts its GraphQL endpoint at the
      // server root. However, *other* Apollo Server packages host it at
      // /graphql. Optionally provide this to match apollo-server.
  });

  // Modified server startup
  await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve as any));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}