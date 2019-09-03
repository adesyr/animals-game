import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'animals-game', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'form', loadChildren: './pages/form/form.module#FormPageModule' },
  { path: 'converter', loadChildren: './pages/converter/converter.module#ConverterPageModule' },
  { path: 'animals-game', loadChildren: './pages/animals-game/animals-game.module#AnimalsGamePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
