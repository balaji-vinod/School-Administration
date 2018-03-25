import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { TimeTableComponent } from "./time-table/time-table.component";
import { AttendanceComponent } from "./attendance/attendance.component";

const routes: Routes = [{ path: '', component: TimeTableComponent },
{ path: 'attedance', component: AttendanceComponent }];

export const applicaitonRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
