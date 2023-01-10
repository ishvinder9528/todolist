import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ToDoListComponent extends Component {
  @tracked
  text = '';

  @action
  submit(e) {
    e.preventDefault();
    const newTodo = this.text;
    this.args.model.pushObject(newTodo);
    this.text = '';
  }

  @action
  onChange(e) {
    this.text = e.target.value;
  }

  @action
  deleteTodoByIndex(index) {
    this.args.model.removeAt(index);
  }
}
