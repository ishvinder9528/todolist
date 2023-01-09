import Component from '@ember/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ToDoListComponent extends Component{
    @tracked
    text = "";
    
    @action
    submit(model,e){
        e.preventDefault();
        const newTodo = this.text;
        model.pushObject(newTodo);
        this.text = "";
    }
    
    @action
    onChange(e){
        this.text = e.target.value;
    }
}