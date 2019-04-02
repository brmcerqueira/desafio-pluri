import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatCardModule, MatCheckboxModule} from "@angular/material";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { MovieImagePipe } from './movie-image.pipe';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MovieImagePipe
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private translate: TranslateService) {
    translate.addLangs(['pt']);
    translate.setDefaultLang('pt');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/pt/) ? browserLang : 'pt').subscribe();
  }
}
