import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSocialMediaComponent } from './sidebar-social-media.component';

describe('SidebarSocialMediaComponent', () => {
  let component: SidebarSocialMediaComponent;
  let fixture: ComponentFixture<SidebarSocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarSocialMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
