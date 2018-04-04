import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { TimeTableComponent } from './time-table/time-table.component';
import { HeaderComponent } from './time-table/header/header.component';
import { PeriodsComponent } from './time-table/periods/periods.component';
import { TimeTableService } from './time-table/time-table.service';
import { HttpModule } from '@angular/http';
import { AttendanceComponent } from './attendance/attendance.component';
import { applicaitonRoutes } from './app.route';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    TimeTableComponent,
    HeaderComponent,
    PeriodsComponent,
    AttendanceComponent,
    MenuComponent
  ],
  imports: [applicaitonRoutes,
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    HttpModule
  ],
  providers: [TimeTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
