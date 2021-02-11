import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';

import {AppRoutingModule} from './app-routing.module';

// NG Translate
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {HomeModule} from './home/home.module';
import {DetailModule} from './detail/detail.module';

import {AppComponent} from './app.component';

// ant design
import {LoginComponent} from './component/login/login.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";


// 引入全部的图标，不推荐 ❌
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzLayoutModule} from "ng-zorro-antd/layout";


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NzAlertModule} from "ng-zorro-antd/alert";

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// ant design
const NG_ZORRO_MODULE = [

  NzLayoutModule,
  NzCheckboxModule,
  NzFormModule,
  NzInputModule,
  ReactiveFormsModule,
  NzButtonModule,
  NzAlertModule
];

@NgModule({
  declarations: [AppComponent, LoginComponent],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    HomeModule,
    DetailModule,
    AppRoutingModule,
    ...NG_ZORRO_MODULE,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NzIconModule.forRoot(icons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
