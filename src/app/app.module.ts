import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {CdkTableModule} from '@angular/cdk/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
import {MAT_CHIPS_DEFAULT_OPTIONS, MatChipsModule} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {LoginComponent} from './pages/auth/login/login.component';
import {AuthenticationService} from '../services/authentication.service';
import {HttpInterceptorService} from '../services/httpInterceptor.service';
import {LogoutComponent} from './pages/auth/logout/logout.component';
import {MenuComponent} from './pages/menu/menu.component';
import {RegisterComponent} from './pages/auth/register/register.component';
import {MainClientComponent} from './pages/client/main-client/main-client.component';
import {MasterCallClientComponent} from './pages/client/master-call-client/master-call-client.component';
import {ClientService} from '../services/client.service';
import {KeyCarClientComponent} from './pages/client/key-car-client/key-car-client.component';
import {OrdersClientComponent} from './pages/client/orders-client/orders-client.component';
import {MainAdminComponent} from './pages/admin/main-admin/main-admin.component';
import {RegisterMasterComponent} from './pages/admin/register-master/register-master.component';
import {AdminService} from '../services/admin.service';
import {MainMasterComponent} from './pages/master/main-master/main-master.component';
import {NewOrdersComponent} from './pages/master/new-orders/new-orders.component';
import {OrdersMaterComponent} from './pages/master/orders-mater/orders-mater.component';
import {MasterService} from '../services/master.service';
import {CreateReportComponent} from './pages/master/create-report/create-report.component';
import {CreateOfferComponent} from './pages/master/create-offer/create-offer.component';
import {CheckOfferComponent} from './pages/client/check-offer/check-offer.component';


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'registerMaster', component: RegisterMasterComponent},
  {path: 'mainClient', component: MainClientComponent},
  {path: 'mainAdmin', component: MainAdminComponent},
  {path: 'mainMaster', component: MainMasterComponent},
  {path: 'masterCallClient', component: MasterCallClientComponent},
  {path: 'keyCarClient', component: KeyCarClientComponent},
  {path: 'ordersClient', component: OrdersClientComponent},
  {path: 'newOrders', component: NewOrdersComponent},
  {path: 'ordersMaster', component: OrdersMaterComponent},
  {path: 'createReport', component: CreateReportComponent},
  {path: 'createOffer', component: CreateOfferComponent},
  {path: 'checkOffer', component: CheckOfferComponent},
  {path: '', component: LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    RegisterComponent,
    MainClientComponent,
    MasterCallClientComponent,
    KeyCarClientComponent,
    OrdersClientComponent,
    MainAdminComponent,
    RegisterMasterComponent,
    MainMasterComponent,
    NewOrdersComponent,
    OrdersMaterComponent,
    CreateReportComponent,
    CreateOfferComponent,
    CheckOfferComponent
  ],
  imports: [
    MatNativeDateModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSortModule,
    MatTableModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
    CdkTableModule,
    MatMenuModule,
    MatListModule,
    MatStepperModule,
    MatSelectModule,
    MatChipsModule
  ],
  providers: [
    AuthenticationService,
    ClientService,
    AdminService,
    MasterService,
    {
      provide: MAT_CHIPS_DEFAULT_OPTIONS,
      useValue: {
        separatorKeyCodes: [ENTER, COMMA]
      }
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}


