import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarmelitasCookinbookComponent } from './components/carmelitas-cookinbook/carmelitas-cookinbook.component';
import { CarmelitasMomentsGalleryComponent } from './components/carmelitas-moments-gallery/carmelitas-moments-gallery.component';
import { CarmelitasMomentsComponent } from './components/carmelitas-moments/carmelitas-moments.component';
import { CarmelitasRecipesGalleryComponent } from './components/carmelitas-recipes-gallery/carmelitas-recipes-gallery.component';
import { CarmelitasRecipesComponent } from './components/carmelitas-recipes/carmelitas-recipes.component';
import { CraftProccessAndRecipesComponent } from './components/craft-proccess-and-recipes/craft-proccess-and-recipes.component';
import { HaccpCertificationComponent } from './components/haccp-certification/haccp-certification.component';
import { HomeComponent } from './components/home/home.component';
import { MissionVisionComponent } from './components/mission-vision/mission-vision.component';
import { NomScfiCertificationComponent } from './components/nom-scfi-certification/nom-scfi-certification.component';
import { NoticeComponent } from './components/notice/notice.component';
import { OurCatalogueComponent } from './components/our-catalogue/our-catalogue.component';
import { OurCertificationsComponent } from './components/our-certifications/our-certifications.component';
import { OurDepartmentsComponent } from './components/our-departments/our-departments.component';
import { OurFamilyComponent } from './components/our-family/our-family.component';
import { OurHistoryComponent } from './components/our-history/our-history.component';
import { SellingsPointsMexicoComponent } from './components/sellings-points-mexico/sellings-points-mexico.component';
import { SellingsPointsUsaComponent } from './components/sellings-points-usa/sellings-points-usa.component';
import { SellingsPointsComponent } from './components/sellings-points/sellings-points.component';
import { TermsComponent } from './components/terms/terms.component';

const routes: Routes = [
  {path:'',component:HomeComponent}, 
  {path:'terms-and-conditions', component:TermsComponent},
  {path:'notice-of-privacy', component: NoticeComponent},
  {path:'sellings-points', component:SellingsPointsComponent},
  {path:'sellings-points-mexico', component:SellingsPointsMexicoComponent},
  {path:'sellings-points-usa', component: SellingsPointsUsaComponent},
  {path:'mission-vision', component:MissionVisionComponent},
  {path:'our-history', component:OurHistoryComponent},
  {path:'our-catalogue', component:OurCatalogueComponent},
  {path:'our-family', component:OurFamilyComponent},
  {path:'our-certifications', component:OurCertificationsComponent},
  {path:'our-certifications/gallery/haccp', component:HaccpCertificationComponent},
  {path:'our-certifications/gallery/nom-scfi', component:NomScfiCertificationComponent},
  {path:'our-departments', component:OurDepartmentsComponent},
  {path:'recipebook-and-artesanal-process', component:CraftProccessAndRecipesComponent},
  {path:'carmelitas-recipes', component: CarmelitasRecipesComponent},
  {path:'carmelitas-recipes/:id', component: CarmelitasCookinbookComponent},
  {path:'carmelitas-recipes/gallery/:id', component: CarmelitasRecipesGalleryComponent},
  {path:'carmelitas-moments', component:CarmelitasMomentsComponent},
  {path:'carmelitas-moments/gallery/:id', component:CarmelitasMomentsGalleryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
