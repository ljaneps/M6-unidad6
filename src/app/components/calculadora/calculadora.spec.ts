import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora';


describe('Calculadora', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraComponent, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('los valores iniciales deben ser 0', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(component.operador1).toBe(0);
    expect(component.operador2).toBe(0);
    expect(component.resultado).toBe(0);
    expect(compiled.querySelector('p')?.textContent).toContain('Resultado: 0');
  });
});

