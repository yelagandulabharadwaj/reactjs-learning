import { useState } from "react";
import Edit from "./Edit";

function frontend_Adding() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState<string[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  // ➕ Add new note
  const handleAdd = () => {
    if (note.trim() === "") return;

    setNotes([...notes, note]);
    setNote("");
  };

  // ✏️ Start editing
  const handleEdit = (index: number) => {
    setEditingIndex(index);
  };

  // 💾 Save edited note
  const handleSave = (updatedNote: string) => {
    if (editingIndex === null) return;

    const updated = [...notes];
    updated[editingIndex] = updatedNote;

    setNotes(updated);
    setEditingIndex(null);
  };

  // ❌ Cancel editing
  const handleCancel = () => {
    setEditingIndex(null);
  };

  // 🗑️ Delete note
  const handleDelete = (index: number) => {
    const filtered = notes.filter((_, i) => i !== index);
    setNotes(filtered);
  };

  return (
    <>
      <h2>Notes App</h2>

      {/* Add Section */}
      <input
        type="text"
        placeholder="add notes"
        value={note}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNote(e.target.value)
        }
      />
      <button onClick={handleAdd}>Add</button>

      {/* Notes List */}
      <ul>
        {notes.map((n, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <Edit
                currentNote={n}
                onSave={handleSave}
                onCancel={handleCancel}
              />
            ) : (
              <>
                {n}
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

export default frontend_Adding;
