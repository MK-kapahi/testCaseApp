import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

//test-suit
describe('AppComponent', () => {  

  let component = new AppComponent;
  //1st this will execute
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  //test-case 
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testcaseApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testcaseApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('testcaseApp app is running!');
  });
  //use x for excluding a particular testcase
  it('testcase',()=>{
  
    expect(true).toBe(true);
  })

  it('Show Alert Message',()=>{
    expect(component.showMsg("Heyyy")).toBe("Heyyy");

  })
});                                                                                                                                                                                                                   
