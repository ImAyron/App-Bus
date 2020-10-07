import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LourdesBeiraRioPage } from './lourdes-beira-rio.page';

describe('LourdesBeiraRioPage', () => {
  let component: LourdesBeiraRioPage;
  let fixture: ComponentFixture<LourdesBeiraRioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LourdesBeiraRioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LourdesBeiraRioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
