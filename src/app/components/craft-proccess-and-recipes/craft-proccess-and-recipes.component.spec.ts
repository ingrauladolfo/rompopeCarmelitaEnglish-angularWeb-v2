import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftProccessAndRecipesComponent } from './craft-proccess-and-recipes.component';

describe('CraftProccessAndRecipesComponent', () => {
  let component: CraftProccessAndRecipesComponent;
  let fixture: ComponentFixture<CraftProccessAndRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraftProccessAndRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftProccessAndRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
