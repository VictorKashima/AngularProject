import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { HelloworldComponent } from "./components/helloworld/helloworld.component";

import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";

const routes: Routes = [
  {path: '', component: HelloworldComponent}, 
  {path: 'list', component: ListRenderComponent},
  {path: 'list/:id', component: ItemDetailComponent},
  {path: 'first', component: FirstComponentComponent}
]

@NgModule({ 
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}