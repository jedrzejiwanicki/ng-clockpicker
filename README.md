## Install

`npm i ng-clock-picker-lib --save`


## Usage

Add `NgClockPickerLibModule` to your module imports:

```typescript
 import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';
 import { NgClockPickerLibModule, ClockPickerDialogService } from 'ng-clock-picker-lib';
 
 import { AppComponent } from './app.component';
 
 @NgModule({
   declarations: [
     AppComponent,
   ],
   imports: [
     BrowserModule,
     NgClockPickerLibModule.forRoot(),
     ReactiveFormsModule,
     FormsModule,
   ],
   providers: [ClockPickerDialogService],
   bootstrap: [AppComponent]
 })
 export class AppModule { }

```

#### With reactive forms:
```angular2html
<form [formGroup]="form">
  <input ngClockPicker [ngClockPickerConfig]="config" formControlName="time" />
</form>
```

#### With template driven forms:
```angular2html
<input [(ngModel)]="time" ngClockPicker [ngClockPickerConfig]="config" />
```

#### By injecting service straight into component:

```typescript
import { Component, ViewContainerRef } from '@angular/core';
import { ClockPickerDialogService, DialogConfig } from 'ng-clock-picker-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  config: DialogConfig = { 
    wrapperClassName: 'className', 
    closeOnOverlayClick: true 
  };
  
  constructor(private vcr: ViewContainerRef, private clockPickerDialogService: ClockPickerDialogService) {}
  

  ngOnInit(): void {
    this.clockPickerDialogService.registerViewContainerRef(this.vcr);
  }
  
  showModal(): void {
    this.clockPickerDialogService.showClockPickerDialog(this.config).subscribe((time: string) => console.log(time))
  }
}

```
