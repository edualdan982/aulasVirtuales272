import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialChatComponent } from './material-chat.component';

describe('MaterialChatComponent', () => {
  let component: MaterialChatComponent;
  let fixture: ComponentFixture<MaterialChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
