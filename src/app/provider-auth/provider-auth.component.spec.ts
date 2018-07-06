import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderAuthComponent } from './provider-auth.component';

describe('ProviderAuthComponent', () => {
  let component: ProviderAuthComponent;
  let fixture: ComponentFixture<ProviderAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
