import React from 'react'
import Button from './Button'

function TodoTable({ todos, setTodos }) {

    let handleMarkAsDone = (id) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id
                    ? { ...todo, isDone: true }
                    : todo
            )
        );
    };
    
    let handleDeleteTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter((todo) => todo.id !== id));
    };




    return (
        <div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
            <div className='p-6 border-b border-gray-100'>
                <h2 className='text-xl font-semibold text-gray-800'>Your Todos</h2>
                <p className='text-gray-600 text-sm mt-1'>
                    {todos.length} {todos.length === 1 ? 'todo' : 'todos'} in list
                </p>
            </div>

            {todos.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50">
                                <th className="p-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    <div className="flex items-center gap-2">
                                        <span>#</span>
                                    </div>
                                </th>
                                <th className="p-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Todo Name
                                </th>
                                <th className="p-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Priority
                                </th>
                                <th className="p-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Created At
                                </th>
                                <th className="p-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {todos.map((todo, index) => (
                                <tr
                                    key={index}
                                    className="hover:bg-gray-50 l transition-colors duration-200"
                                >
                                    <td className="p-4 ">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-medium">
                                                {index + 1}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center">
                                            <div className="ml-4">
                                                <div className={`text-sm  font-medium text-gray-900 ${todo.isDone && 'line-through'}`}>
                                                    {todo.name}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                        ${todo.priority === 'high'
                                                ? 'bg-red-100 text-red-800'
                                                : todo.priority === 'medium'
                                                    ? 'bg-yellow-100 text-yellow-800'
                                                    : 'bg-green-100 text-green-800'
                                            }`}>
                                            {todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)}
                                        </span>
                                    </td>
                                    <td className="p-4 text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {todo.createdAt}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-2">
                                            {
                                                !todo.isDone && <Button
                                                    text={"Done"}
                                                    type={"done"}
                                                    onClick={() => { handleMarkAsDone(todo.id) }}
                                                    className="px-4 py-2 text-sm rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white"
                                                />
                                            }
                                            <Button
                                                text={"Delete"}
                                                type={"delete"}
                                                onClick={() => { handleDeleteTodo(todo.id) }}
                                                className="px-4 py-2 text-sm rounded-lg bg-red-500 hover:bg-red-600 text-white"
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="p-12 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 mb-4">
                        <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No todos yet</h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                        Start by adding your first todo item above. Your list will appear here once you add items.
                    </p>
                </div>
            )}
        </div>
    )
}

export default TodoTable