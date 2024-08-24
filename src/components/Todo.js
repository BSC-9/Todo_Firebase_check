import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../firebase';  // Import Firestore configuration

const Todo = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = async (e) => {
        e.preventDefault();  

        try {
            const docRef = await addDoc(collection(db, "todos"), {
              todo: todo,    
            });
            console.log("Document written with ID: ", docRef.id);
            setTodo(""); // Clear the input after submission
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const fetchPost = async () => {
        await getDocs(collection(db, "todos"))
            .then((querySnapshot) => {              
                const newData = querySnapshot.docs.map((doc) => ({
                    ...doc.data(), id: doc.id
                }));
                setTodos(newData);
            });
    }

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <section className="flex justify-center items-center min-h-screen">
            <div className="w-4/5 md:w-2/3 lg:w-1/2 mx-auto mt-12">
                <h1 className="text-4xl font-bold text-center mb-4">
                    Todo-App
                </h1>

                <div>
                    <div>
                        <input
                            type="text"
                            value={todo}
                            placeholder="What do you have to do today?"
                            className="w-full p-2 border border-gray-300 rounded"
                            onChange={(e) => setTodo(e.target.value)}
                        />
                    </div>

                    <div className="flex justify-center items-center mt-4">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-gray-800 text-white rounded cursor-pointer hover:bg-gray-700"
                            onClick={addTodo}
                        >
                            Submit
                        </button>
                    </div>
                </div>

                <div className="mt-8">
                    {todos.length > 0 ? (
                        todos.map((todoItem, i) => (
                            <p key={i} className="p-2 mb-2 bg-gray-100 rounded shadow-sm">
                                {todoItem.todo}
                            </p>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No todos yet.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Todo;
