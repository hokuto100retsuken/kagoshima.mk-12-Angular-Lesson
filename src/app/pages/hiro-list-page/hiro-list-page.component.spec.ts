import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiroListPageComponent } from './hiro-list-page.component';

describe('HiroListPageComponent', () => {
  let component: HiroListPageComponent;
  let fixture: ComponentFixture<HiroListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiroListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiroListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
