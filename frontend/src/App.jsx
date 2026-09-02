import { useEffect, useState } from "react";

import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API_URL}/notes`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch notes");
      }

      setNotes(data.notes);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleNoteAdded = (newNote) => {
    setNotes((previousNotes) => [newNote, ...previousNotes]);
  };

  const handleNoteDeleted = (deletedId) => {
    setNotes((previousNotes) =>
      previousNotes.filter((note) => note._id !== deletedId),
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Notes App</h1>

          <span className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600">
            MERN
          </span>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">My Notes</h2>

          <p className="mt-2 text-gray-500">
            Create and manage your notes easily.
          </p>
        </div>

        <AddNote onNoteAdded={handleNoteAdded} />

        <div className="mt-10">
          <NoteList
            notes={notes}
            loading={loading}
            error={error}
            onNoteDeleted={handleNoteDeleted}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
