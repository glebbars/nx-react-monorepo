import { CommonUi } from '@glebbars/common-ui';
import { ITodo } from '@nx-react-monorepo/data-access';
import { Item } from './components/item/item';

const mockedTodoList: ITodo[] = [
  { name: 'Walk 5km', details: 'morning routine' },
  {
    name: 'Make a breakfast',
    details: 'do not forget about adding extra protein',
  },
  { name: 'Finish project', details: 'deadline is tomorrow' },
];

export function App() {
  return (
    <div>
      <span>Welcome todo app</span>
      <CommonUi />
      {mockedTodoList.map((todo) => (
        <Item item={todo} key={todo.name} />
      ))}
    </div>
  );
}

export default App;
