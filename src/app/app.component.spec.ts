import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],//declare the component
    }).compileComponents();//compile template and css files
  }));



  it(`should have as title 'MiracleSoftwareSystems'`, async(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const app = fixture.debugElement.componentInstance;

    expect(app.title).toEqual('MiracleSoftwareSystems');
  }));



});



