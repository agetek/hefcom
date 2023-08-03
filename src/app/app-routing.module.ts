import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { ImprintComponent } from './imprint/imprint.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'message-sent', component: MessageComponent },
  { path: 'imprint', component: ImprintComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', onSameUrlNavigation: 'reload',  anchorScrolling: 'enabled',  enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
