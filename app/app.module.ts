import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { Apollo, ApolloModule } from "apollo-angular";
import { HttpLink, HttpLinkModule } from "apollo-angular-link-http";
import { defaultDataIdFromObject, InMemoryCache } from "apollo-cache-inmemory";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "~/login/services/auth.interceptor";
import { LoginModule } from "~/login/login.module";
import { WebSocketLink } from "apollo-link-ws";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { OperationDefinitionNode } from "graphql";
//import * as  base64 from "base-64";
import 'nativescript-websockets';
import { ReactiveFormsModule } from "@angular/forms";
import { ChatViewerModule } from "~/chat-viewer/chat-viewer.module";
import { ChatsListerModule } from "~/chats-lister/chats-lister.module";
import { SharedModule } from "~/shared/shared.module";
import { LoginService } from "~/login/services/login.service";

const url = '192.168.1.197:3000';
const graphql = `http://${url}/graphql`;
const subscriptions = `ws://${url}/subscriptions`;
const signin = `http://${url}/signin`;

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptFormsModule,
    ReactiveFormsModule,
    NativeScriptHttpClientModule,
    ApolloModule,
    HttpLinkModule,
    LoginModule,
    ChatViewerModule,
    ChatsListerModule,
    SharedModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    { provide: 'url', useValue: url },
    { provide: 'graphql', useValue: graphql },
    { provide: 'subscriptions', useValue: subscriptions },
    { provide: 'signin', useValue: signin },
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink,
    loginService: LoginService,
  ) {
    console.log('app.module');
    //const username = 'ethan';
    //const password = '111'; // 111
    //const auth = `Basic ${base64.encode(`${username}:${password}`)}`;
    const auth = loginService.getAuthHeader() || null;

    const subscriptionLink = new WebSocketLink({
      uri: subscriptions,
      options: {
        reconnect: true,
        connectionParams: () => ({
          authToken: auth
        })
      },
      webSocketImpl: WebSocket,
    });

    const link = split(
      ({ query }) => {
        const { kind, operation } = <OperationDefinitionNode>getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
      },
      subscriptionLink,
      httpLink.create({uri: graphql})
    );

    apollo.create({
      link,
      cache: new InMemoryCache({
        dataIdFromObject: (object: any) => {
          switch (object.__typename) {
            case 'Message': return `${object.chat.id}:${object.id}`; // use `chatId` prefix and `messageId` as the primary key
            default: return defaultDataIdFromObject(object); // fall back to default handling
          }
        }
      }),
    });
  }

}
