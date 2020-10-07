import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoaVistaJacuiPage } from './boa-vista-jacui.page';

describe('BoaVistaJacuiPage', () => {
  let component: BoaVistaJacuiPage;
  let fixture: ComponentFixture<BoaVistaJacuiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoaVistaJacuiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoaVistaJacuiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
