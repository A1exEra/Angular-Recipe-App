import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterseptorService } from './shared/services/auth-interseptor.service';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterseptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
