import React, { useEffect, useState } from "react";

const Todo = () => {
  //Create states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //Get and display state
  const [todos, setTodos] = useState([]);

  //Message and error states
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  //Update states
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editId, setEditId] = useState(-1);

  const apiUrl = "http://localhost:8000";

  //Create Todo
  const handleSubmit = () => {
    setError("");
    if (title.trim() !== "" && description.trim() !== "") {
      fetch(`${apiUrl}/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      })
        .then((res) => {
          if (res.ok) {
            //Add item to list
            setTodos([...todos, { title, description }]);
            setTitle("");
            setDescription("");
            setMessage("Item added successfully !!!");
            setTimeout(() => {
              setMessage("");
            }, 3000);
          } else {
            setError("Unable to create TODO");
          }
        })
        .catch(() => {
          setError("Server not create TODO");
        });
    } else {
      setError("Title and description cannot be empty");
    }
  };

  //Get Todo
  const getItems = () => {
    fetch(`${apiUrl}/todos`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setTodos(res.todos);
      })
      .catch(() => {
        setError("Failed to fetch TODOs");
      });
  };

  useEffect(() => {
    getItems();
  }, [todos]);

  //Update Todo
  const handleEdit = (todo) => {
    setEditId(todo._id);
    setEditTitle(todo.title);
    setEditDescription(todo.description);
  };

  const handleUpdate = () => {
    setError("");
    if (editTitle.trim() !== "" && editDescription.trim() !== "") {
      fetch(`${apiUrl}/todos/${editId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: editTitle,
          description: editDescription,
        }),
      })
        .then((res) => {
          if (res.ok) {
            //Update item to list
            const updatedTodos = todos.map((item) => {
              if (editId === item._id) {
                item.title = editTitle;
                item.description = editDescription;
              }
              return item;
            });
            setTodos(updatedTodos);
            setEditTitle("");
            setEditDescription("");
            setMessage("Item updated successfully !!!");
            setTimeout(() => {
              setMessage("");
            }, 3000);
            setEditId(-1);
          } else {
            setError("Unable to update TODO");
          }
        })
        .catch(() => {
          setError("Server not update TODO");
        });
    } else {
      setError("Title and description cannot be empty");
    }
  };

  //remove from editing
  const handleEditCancel = () => {
    setEditId(-1);
  };

  //Delete the todo
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      fetch(`${apiUrl}/todos/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            //Update item to list
            const updatedTodos = todos.filter((item) => item._id !== id);
            setTodos(updatedTodos);
            setMessage("Item Deleted successfully !!!");
            setTimeout(() => {
              setMessage("");
            }, 3000);
            setEditId(-1);
          } else {
            setError("Unable to delete TODO");
          }
        })
        .catch(() => {
          setError("Server not delete TODO");
        });
    }
  };

  return (
    <>
      <div className="row p-3 bg-success text-light">
        <h1>TODO CRUD</h1>
      </div>

      {/*Create Todo*/}
      <div className="row">
        <h3>Add item</h3>
        {message && <p className="text-success">{message}</p>}
        <div className="form-group d-flex gap-2">
          <input
            type="text"
            className="form-control"
            placeholder="Enter title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <button className="btn btn-dark" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        {error && <p className="text-danger">{error}</p>}
      </div>

      {/*List Todo*/}
      <div className="row mt-3">
        <h3>Tasks</h3>
        <div className="col-md-6">
          <ul className="list-group">
            {todos.map((todo, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center bg-light my-2 border-1 gap-2"
              >
                <div className="d-flex flex-column">
                  {editId === -1 || editId !== todo._id ? (
                    <>
                      <span className="fw-bold">{todo.title}</span>
                      <span>{todo.description}</span>
                    </>
                  ) : (
                    <div className="form-group d-flex gap-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter title"
                        onChange={(e) => setEditTitle(e.target.value)}
                        value={editTitle}
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter description"
                        onChange={(e) => setEditDescription(e.target.value)}
                        value={editDescription}
                      />
                    </div>
                  )}
                </div>
                <div className="d-flex gap-2">
                  {editId === -1 || editId !== todo._id ? (
                    <>
                      <button
                        className="btn btn-warning"
                        onClick={() => handleEdit(todo)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(todo._id)}
                      >
                        Delete
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="btn btn-dark" onClick={handleUpdate}>
                        Update
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={handleEditCancel}
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todo;
