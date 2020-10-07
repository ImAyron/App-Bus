import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'municipal',
    loadChildren: () => import('./municipal/municipal.module').then( m => m.MunicipalPageModule)
  },
  {
    path: 'lourdes-beira-rio',
    loadChildren: () => import('./lourdes-beira-rio/lourdes-beira-rio.module').then( m => m.LourdesBeiraRioPageModule)
  },
  {
    path: 'circular',
    loadChildren: () => import('./circular/circular.module').then( m => m.CircularPageModule)
  },
  {
    path: 'boa-vista-jacui',
    loadChildren: () => import('./boa-vista-jacui/boa-vista-jacui.module').then( m => m.BoaVistaJacuiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
