import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AlbumComponent} from "./album/album.component";
import {AddAlbumComponent} from "./album/add-album/add-album.component";

const routes: Routes = [
  {
    path: '',
    component: AlbumComponent
  },
  {
    path: 'album/add',
    component: AddAlbumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
