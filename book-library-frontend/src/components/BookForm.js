import React, { useState, useEffect } from "react";

function BookForm({ addBook, updateBook, selectedBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (selectedBook) {
      setTitle(selectedBook.title);
      setAuthor(selectedBook.author);
    }
  }, [selectedBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedBook) {
      updateBook({ ...selectedBook, title, author });
    } else {
      addBook({ title, author });
    }
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <button type="submit">{selectedBook ? "Update Book" : "Add Book"}</button>
    </form>
  );
}

export default BookForm;
