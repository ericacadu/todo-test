import { useState, createContext, useContext, useEffect } from 'react';
import { state, initTaskList } from './scripts';

export const todoContext = createContext();
export const useTodoContext = () => useContext(todoContext);

export function useTodoList() {
  const [newTask, setNewTask] = useState('');
  const [todoList, setTodoList] = useState(initTaskList);
  const [states, setStates] = useState(state);

  function onInput(e) {
    setNewTask(e.target.value);
  }

  function addNewTask() {
    if (!newTask.trim() || !states.intBtn) return;
    setTodoList(() => [
      {
        id: Date.now(),
        title: newTask,
        isEdit: false,
        isDone: false,
      },
      ...todoList,
    ]);
    setNewTask('');
    console.log(todoList);
  }

  function toggleState(id, key) {
    setTodoList(
      todoList.map((item) => {
        key === 'isEdit' && item.id !== id && (item.isEdit = false);
        item.id === id && (item[key] = !item[key]);
        return item;
      })
    );
  }

  function editTask(e, id) {
    return;
  }

  function focusIntBtn(e) {
    e.target.closest('div').querySelector('input').focus();
    setStates({
      ...states,
      intBtn: true,
    });
  }

  function handleInputBar(e) {
    if (!!newTask.trim()) return;
    if (!e.target.closest('.input-bar')) setStates((state.intBtn = false));
  }

  function handleKeyDown(e) {
    e.code === 'Enter' && addNewTask();
  }

  useEffect(() => {
    window.addEventListener('click', handleInputBar);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('click', handleInputBar);
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  // useEffect(() => {
  //   console.log(todoList);
  // }, [todoList]);

  return {
    focusIntBtn,
    onInput,
    addNewTask,
    editTask,
    toggleState,
    states,
    newTask,
    todoList,
  };
}
