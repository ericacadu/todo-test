import { useState, createContext, useContext, useRef, useEffect } from 'react';
import { storage, data, category } from './utils';

const headerContext = createContext();
const useHeaderContext = () => useContext(headerContext);

const todoContext = createContext();
const useTodoContext = () => useContext(todoContext);

function useTodoList() {
  const [newTask, setNewTask] = useState('');
  const [inputStatus, setInputStatus] = useState(false);
  const [todoList, setTodoList] = useState(() => storage().get());
  const [current, setCurrent] = useState(category[0]);
  const [filterList, setFilterList] = useState(todoList);
  const [menuStatus, setMenuStatus] = useState(false);
  const [modal, setModal] = useState({});
  const inputRef = useRef('');

  function onInput(e) {
    setNewTask(e.target.value);
  }

  function onFocus() {
    setInputStatus(true);
    inputRef.current.focus();
  }

  function onBlur() {
    setMenuStatus(false);
  }

  function toggleStatus() {
    setMenuStatus(!menuStatus);
  }

  function toggleMenu(cate) {
    setCurrent(cate);
    switch (cate) {
      case category[1]:
        setFilterList(todoList.filter((item) => item.isDone === false));
        break;
      case category[2]:
        setFilterList(todoList.filter((item) => item.isDone === true));
        break;
      default:
        setFilterList(todoList);
        break;
    }
  }

  function handleInputBar(e) {
    if (!!newTask.trim()) return;
    if (!e.target.closest('.input-bar')) setInputStatus(false);
  }

  function handleKeyDown(e) {
    if (e.code === 'Enter') addNewTask();
  }

  function addNewTask() {
    if (!newTask.trim()) return;
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
  }

  function updateTask(id, key) {
    setTodoList(
      todoList.map((item) => {
        key === 'isEdit' && item.id !== id && (item.isEdit = false);
        item.id === id && (item[key] = !item[key]);
        return item;
      })
    );
  }

  function editTask(e, id) {
    setTodoList(
      todoList.map((item) => {
        item.id === id && (item.title = e.target.value);
        return item;
      })
    );
  }

  function deleteTask(id) {
    setTodoList(todoList.filter((item) => item.id !== id));
    closeModal();
  }

  function openModal(id, text) {
    setModal(() => {
      const item = todoList.filter((todo) => todo.id === id);
      return {
        text: text,
        title: item[0].title,
        id: item[0].id,
        isShow: true,
      };
    });
  }

  function closeModal() {
    setModal((modal) => (modal.isShow = false));
  }

  useEffect(() => {
    window.addEventListener('click', handleInputBar);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('click', handleInputBar);
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  useEffect(() => {
    storage().set(todoList);
    toggleMenu(current);
    if (!todoList.length) {
      storage().set(data);
    }
  }, [todoList]);

  return {
    headerContextValue: {
      inputRef,
      inputStatus,
      menuStatus,
      newTask,
      current,
      onInput,
      onFocus,
      onBlur,
      addNewTask,
      toggleStatus,
      toggleMenu,
    },
    todoContextValue: {
      editTask,
      updateTask,
      deleteTask,
      openModal,
      closeModal,
    },
    todoList,
    filterList,
    modal,
  };
}

export { useTodoList, headerContext, useHeaderContext, todoContext, useTodoContext };
