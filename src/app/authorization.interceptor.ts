import { HttpInterceptorFn } from '@angular/common/http';

export const authorizationInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    setHeaders: {
      Authorization: 'apikey 5AYOTrMSDutVRkjXWlAi3q:3xmP6OoEfuBiKDVL5cIgML'
    }
  })
  return next(authReq);
};
