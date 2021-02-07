
import { ScrollToDirective } from './helpers/scrollTo.directives';
import { WINDOW_PROVIDERS } from './helpers/window.helpers';
import { NgModule } from '@angular/core';
// import { NgForm } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { NguCarouselModule } from "@ngu/carousel";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { Intro1Component } from './components/intro1/intro1.component';;
import { Works1Component } from './components/works1/works1.component';
import { Works2Component } from './components/works2/works2.component';
import { WorksCarouselComponent } from './components/works-carousel/works-carousel.component';
import { ServicesComponent } from './components/services/services.component';
import { ServicesCauroselComponent } from './components/services-caurosel/services-caurosel.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftImageComponent } from './components/left-image/left-image.component';
import { RightImageComponent } from './components/right-image/right-image.component';
import { NewsComponent } from './components/news/news.component';
import { NewsTwoComponent } from './components/news-two/news-two.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogDetailsPageComponent } from './blog-details-page/blog-details-page.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NguCarouselModule,
    NgbModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    Intro1Component,
    Works1Component,
    Works2Component,
    WorksCarouselComponent,
    ServicesComponent,
    ServicesCauroselComponent,
    ContactFormComponent,
    FooterComponent,
    LeftImageComponent,
    RightImageComponent,
    NewsComponent,
    NewsTwoComponent,
    HeaderComponent,
    ScrollToDirective,
    BlogDetailsComponent,
    BlogDetailsPageComponent
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [WINDOW_PROVIDERS]
})
export class HomeModule {}
