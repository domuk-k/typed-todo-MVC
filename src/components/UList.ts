import { Component } from '../lib/types';
import { createVnode } from '../lib';
import { ListItem } from './ListItem';
import type { Todo } from '../model';

interface IProps {
  todos: Todo[];
}

export class UList extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return createVnode(
      'ul',
      null,
      ...this.props.todos.map((todo) => createVnode(ListItem, { todo })),
    );
  }
}
