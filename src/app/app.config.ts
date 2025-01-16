import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authorizationInterceptor } from './authorization.interceptor';

import { importProvidersFrom } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { PlaylistState } from '../app/home/playlist.state';

export const appConfig: ApplicationConfig = {
  providers: [
    
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideHttpClient(),
    provideClientHydration(withEventReplay()), 
    provideHttpClient(withInterceptors([authorizationInterceptor])),
    importProvidersFrom(NgxsModule.forRoot([PlaylistState])),
  ]
};
