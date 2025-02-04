import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MunicipalPage } from './municipal.page';

describe('MunicipalPage', () => {
  let component: MunicipalPage;
  let fixture: ComponentFixture<MunicipalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MunicipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
