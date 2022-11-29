import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change theme', () => {
    component.changeTheme();
    if(!component.isDarkMode){
      expect(component.isDarkMode).toBeFalsy();
      //checl if the class dark is removed
      expect(document.documentElement.classList.contains('dark')).toBeFalsy();
      //check if the class light is added
      expect(document.documentElement.classList.contains('light')).toBeTruthy();
    }else{
      expect(component.isDarkMode).toBeTruthy();
      //checl if the class dark is added
      expect(document.documentElement.classList.contains('dark')).toBeTruthy();
      //check if the class light is removed
      expect(document.documentElement.classList.contains('light')).toBeFalsy();
    }
  });
});
