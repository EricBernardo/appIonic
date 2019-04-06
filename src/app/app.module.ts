import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListGroupsComponent } from './components/list-groups/list-groups.component';

function jwtOptionsFactory(storage) {
  return {
    tokenGetter: () => storage.get('access_token'),
    whitelistedDomains: ['api.leadforce.com.br']
  };
}

@NgModule({
  declarations: [
    AppComponent,
    ListGroupsComponent
  ],
  entryComponents: [
    ListGroupsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    JwtModule.forRoot({ jwtOptionsProvider: { provide: JWT_OPTIONS, useFactory: jwtOptionsFactory, deps: [Storage] } })
  ],
  exports: [],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
