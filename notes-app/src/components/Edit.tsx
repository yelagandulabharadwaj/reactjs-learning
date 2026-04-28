import { useState } from "react";
type EditProps = {
  currentNote: string;
  onSave: (updatedNote: string) => void;
  onCancel: () => void;
};

function Edit({ currentNote, onSave, onCancel }: EditProps) {
  const [value, setValue] = useState(currentNote);

  const handleSave = () => {
    if (value.trim() === "") return;
    onSave(value);
  };

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </>
  );
}

export default Edit;
