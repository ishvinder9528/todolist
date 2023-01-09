import Route from '@ember/routing/route';

export default class TodoRoute extends Route {
  model() {
    return ['do', 'walk with dog', 'animal'];
  }
}
