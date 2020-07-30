import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipPageComponent } from './zip-page.component';

describe('ZipPageComponent', () => {
  let component: ZipPageComponent;
  let fixture: ComponentFixture<ZipPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
