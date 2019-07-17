import { ColorDirective } from './color.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { Option } from 'src/app/objects/option'

@Component({
    template: `<label [appColor] = 'option.name' for="{{option.name}}">
    {{option.name}}
    </label>`
})
class TestColorComponent {
}


describe('Directive: Color', () => {

    let component: TestColorComponent;
    let fixture: ComponentFixture<TestColorComponent>;
    let inputEl: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestColorComponent, ColorDirective]
        });
        fixture = TestBed.createComponent(TestColorComponent);
        component = fixture.componentInstance;
        inputEl = fixture.debugElement.query(By.css('label'));
    });

    it('should create an instance', () => {
      const directive = new ColorDirective(inputEl);
      expect(directive).toBeTruthy();
    });

    it('should modify color', () => {
        let option = new Option;
        option.name = 'blue'; 
        option.checked = false;
        expect(inputEl.nativeElement.style.backgroundColor).toBe('blue');


    });
});