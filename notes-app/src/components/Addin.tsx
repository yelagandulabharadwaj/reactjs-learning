import { useEffect, useState } from "react";
import Edit from "./Edit";

type Note = {
  id: number;
  content: string;
};

function Addin() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  // 📥 GET NOTES
  useEffect(() => {
    fetch("http://127.0.0.1:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  // ➕ ADD NOTE
  const handleAdd = async () => {
    console.log("NOTE STATE:", note);
    console.log("🚀 BUTTON CLICKED");
    if (!note.trim()) return;

    const res = await fetch("http://127.0.0.1:8000/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: note }),
    });
    console.log("STATUS:", res.status);
    const newNote = await res.json();
    console.log("RESPONSE:", newNote);

    setNotes((prev) => [...prev, newNote]);
    setNote("");
  };

  // ✏️ OPEN EDIT
  const handleEdit = (index: number) => {
    setEditingIndex(index);
  };

  // 💾 SAVE EDIT
  const handleSave = async (updatedNote: string) => {
    if (editingIndex === null) return;

    const noteId = notes[editingIndex].id;

    const res = await fetch(`http://127.0.0.1:8000/notes/${noteId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: updatedNote }),
    });

    const updated = await res.json();

    setNotes((prev) => prev.map((n) => (n.id === updated.id ? updated : n)));

    setEditingIndex(null);
  };

  // 🗑️ DELETE NOTE
  const handleDelete = async (index: number) => {
    const noteId = notes[index].id;

    await fetch(`http://127.0.0.1:8000/notes/${noteId}`, {
      method: "DELETE",
    });

    setNotes((prev) => prev.filter((n) => n.id !== noteId));
  };

  return (
    <>
      <h2>Notes App</h2>

      <input
        type="text"
        value={note}
        placeholder="add notes"
        onChange={(e) => setNote(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>

      <ul>
        {notes.map((n, index) => (
          <li key={n.id}>
            {editingIndex === index ? (
              <Edit
                currentNote={n.content}
                onSave={handleSave}
                onCancel={() => setEditingIndex(null)}
              />
            ) : (
              <>
                {n.content}
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Addin;
