import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // Importa o BrowserAnimationsModule
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';  // Necessário para importar módulos no bootstrap

// Combina o BrowserAnimationsModule com os provedores de appConfig
const modifiedAppConfig = {
  ...appConfig,
  providers: [
    ...appConfig.providers,  // Inclui os provedores já definidos em appConfig
    importProvidersFrom(BrowserAnimationsModule),  // Adiciona o BrowserAnimationsModule
  ]
};

bootstrapApplication(AppComponent, modifiedAppConfig)
  .catch((err) => console.error(err));
