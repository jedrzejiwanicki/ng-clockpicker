[![CircleCI](https://circleci.com/gh/jedrzejiwanicki/ng-clockpicker/tree/master.svg?style=svg)](https://circleci.com/gh/jedrzejiwanicki/ng-clockpicker/tree/master)

<p align="center">
  <img src="https://media.giphy.com/media/65K5OtNGknogxzoYsf/giphy.gif">
</p>


## Demo 

[Demo](http://jedrzejiwanicki.github.io/ng-clockpicker)

## Install

`npm i ng-clock-picker-lib --save`


## Usage

Add `NgClockPickerLibModule` to your module imports:

```typescript
 import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';
 import { NgClockPickerLibModule } from 'ng-clock-picker-lib';
 
 import { AppComponent } from './app.component';
 
 @NgModule({
   declarations: [
     AppComponent,
   ],
   imports: [
     BrowserModule,
     NgClockPickerLibModule,
     ReactiveFormsModule,
     FormsModule,
   ],
   providers: [],
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

#### With event binding:
```angular2html
<input ngClockPicker (ngClockPickerChange)="handleTimeChange($event)" />
```

#### By injecting service straight into component:

```typescript
import { Component, ViewContainerRef } from '@angular/core';
import { ClockPickerDialogService, ClockPickerConfig } from 'ng-clock-picker-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  config: ClockPickerConfig = { 
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

### Config:
```typescript
export interface ClockPickerConfig {
  wrapperClassName?: string;
  buttonCancel?: string;
  buttonConfirm?: string;
  closeOnOverlayClick?: boolean;
}
```

### Styling:

Customize your clock picker styles by passing `wrapperClassName` to config object.

#### Examples:

```scss
  .my-class-name .clock-picker__item-button--selected {
    background-color: $color-primary;
    color: $color-text-light;
  }
  
  .my-class-name .clock-picker__item-button--selected:hover {
    background-color: $color-primary;
    color: $color-text-light;
  }
  
  .my-class-name .clock-picker__clock-face .clock-picker__clock-face__tick {
    stroke: $color-primary;
  }
  
  .my-class-name .clock-picker__clock-face .clock-picker__clock-face__center {
    fill: $color-primary;
  }

```
