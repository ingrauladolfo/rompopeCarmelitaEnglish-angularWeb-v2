import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { NoticeComponent } from './components/notice/notice.component';
import { TermsComponent } from './components/terms/terms.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { SellingsPointsComponent } from './components/sellings-points/sellings-points.component';
import { SellingsPointsMexicoComponent } from './components/sellings-points-mexico/sellings-points-mexico.component';
import { SellingsPointsUsaComponent } from './components/sellings-points-usa/sellings-points-usa.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { OurCompanyComponent } from './components/our-company/our-company.component';
import { ContactComponent } from './components/contact/contact.component';
import { CarmelitaWelcomesYouComponent } from './components/carmelita-welcomes-you/carmelita-welcomes-you.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// MDB Angular Free
import {
  ModalModule,
  TooltipModule,
  PopoverModule,
  ButtonsModule,
  CarouselModule,
  WavesModule,
} from 'angular-bootstrap-md';
import { MissionVisionComponent } from './components/mission-vision/mission-vision.component';
import { CarmelitasMomentsComponent } from './components/carmelitas-moments/carmelitas-moments.component';
import { OurHistoryComponent } from './components/our-history/our-history.component';
import { CraftProccessAndRecipesComponent } from './components/craft-proccess-and-recipes/craft-proccess-and-recipes.component';
import { CarmelitasRecipesComponent } from './components/carmelitas-recipes/carmelitas-recipes.component';
import { OurCatalogueComponent } from './components/our-catalogue/our-catalogue.component';
import { OurFamilyComponent } from './components/our-family/our-family.component';
import { OurCertificationsComponent } from './components/our-certifications/our-certifications.component';
import { OurDepartmentsComponent } from './components/our-departments/our-departments.component';
import { HaccpCertificationComponent } from './components/haccp-certification/haccp-certification.component';
import { NomScfiCertificationComponent } from './components/nom-scfi-certification/nom-scfi-certification.component';
import { CarmelitasRecipesService } from './services/carmelitas-recipes.service';
import { MissionvisionphilosophyService } from './services/missionvisionphilosophy.service';
import { ValuesService } from './services/values.service';
import { CarmelitasCookinbookComponent } from './components/carmelitas-cookinbook/carmelitas-cookinbook.component';
import { CarmelitasRecipesGalleryComponent } from './components/carmelitas-recipes-gallery/carmelitas-recipes-gallery.component';
import { SidebarSocialMediaComponent } from './components/sidebar-social-media/sidebar-social-media.component';
import { CarmelitasMomentsGalleryComponent } from './components/carmelitas-moments-gallery/carmelitas-moments-gallery.component';
import { Mugan86GoogleAnalyticsModule } from 'mugan86-ng-google-analytics';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NoticeComponent,
    TermsComponent,
    SellingsPointsComponent,
    SellingsPointsMexicoComponent,
    SellingsPointsUsaComponent,
    NavBarComponent,
    HomeComponent,
    OurCompanyComponent,
    ContactComponent,
    CarmelitaWelcomesYouComponent,
    MissionVisionComponent,
    CarmelitasMomentsComponent,
    OurHistoryComponent,
    CraftProccessAndRecipesComponent,
    CarmelitasRecipesComponent,
    OurCatalogueComponent,
    OurFamilyComponent,
    OurCertificationsComponent,
    OurDepartmentsComponent,
    HaccpCertificationComponent,
    NomScfiCertificationComponent,
    CarmelitasCookinbookComponent,
    CarmelitasRecipesGalleryComponent,
    SidebarSocialMediaComponent,
    CarmelitasMomentsGalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    NgxExtendedPdfViewerModule,
    MDBBootstrapModule.forRoot(),
    ModalModule,
    TooltipModule,
    PopoverModule,
    ButtonsModule,
    CarouselModule,
    WavesModule,
    Mugan86GoogleAnalyticsModule.forRoot(
      {
        analyticsId: 'G-J5M0NT56B9G',
        showLog: true
      }
    )
  ],
  providers: [CarmelitasRecipesService, MissionvisionphilosophyService,ValuesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
