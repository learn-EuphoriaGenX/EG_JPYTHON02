import React, { useEffect, useState } from 'react'
import Button from './component/ui/Button'
import Input from './component/ui/Input'
import TodoTable from './component/ui/TodoTable'
import { toast } from 'react-toastify';

function App() {


  let [todoName, setTodoName] = useState("")
  let [priority, setPriority] = useState('')

  let [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])



  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  let handleAddTodo = () => {

    if (todoName && priority) {
      setTodos(prevTodos => [
        {
          id: Date.now(),
          name: todoName,
          priority,
          createdAt: new Date().toLocaleDateString(),
          isDone: false
        },
        ...prevTodos,
      ]);
      return toast.success("Todo added successfully!")
    } else {
      return toast.error("Todo Name and priority Required!")
    }
  };

  return (
    <div className='min-h-screen bg-linear-to-br from-green-50 to-emerald-50 p-4 md:p-8'>
      <div className='max-w-6xl mx-auto'>
        {/* Add Todo Section */}
        <div className='bg-white rounded-2xl shadow-lg p-6 mb-8'>
          <h2 className='text-xl font-semibold text-gray-800 mb-4'>Add New Todo</h2>
          <div className='flex flex-col sm:flex-row gap-4'>
            <div className='flex-1 flex flex-col sm:flex-row gap-4'>
              <Input
                type={"text"}
                placeholder={"Enter todo name..."}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                onChange={(e) => { setTodoName(e.target.value) }}
              />
              <select onChange={(e) => setPriority(e.target.value)} className="w-full sm:w-48 px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all ">
                <option value="low" className=''>Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
              </select>
            </div>
            <Button
              text={"Add Todo"}
              type={"add"}
              onClick={handleAddTodo}
            />
          </div>
        </div>

        {/* Todos Table Section */}
        <TodoTable todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App