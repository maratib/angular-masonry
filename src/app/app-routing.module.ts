import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TweetsComponent } from './tweets/tweets.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'tweets', component: TweetsComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
