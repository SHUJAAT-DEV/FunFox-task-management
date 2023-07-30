import  { useState } from 'react';
import useTaskStore from '../../zustand/useTaskStore';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const   { addTask }  =useTaskStore();

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (title.trim() !== '') {
      addTask({ title, description, completed: false });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
