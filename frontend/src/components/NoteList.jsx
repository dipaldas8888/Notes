const API_URL = import.meta.env.VITE_API_URL;

function NoteList({ notes, loading, error, onNoteDeleted }) {
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/notes/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete note");
      }

      onNoteDeleted(id);
    } catch (error) {
      alert(error.message);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-center">
        <p className="font-medium text-red-600">Something went wrong</p>

        <p className="mt-1 text-sm text-red-500">{error}</p>
      </div>
    );
  }

  if (notes.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
          📝
        </div>

        <h3 className="text-lg font-semibold text-gray-900">No notes yet</h3>

        <p className="mt-2 text-sm text-gray-500">
          Create your first note using the form above.
        </p>
      </div>
    );
  }

  return (
    <section>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Your Notes</h2>

        <span className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700">
          {notes.length} {notes.length === 1 ? "note" : "notes"}
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <div
            key={note._id}
            className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="break-words text-lg font-semibold text-gray-900">
              {note.title}
            </h3>

            <p className="mt-3 flex-1 whitespace-pre-wrap break-words text-sm leading-6 text-gray-600">
              {note.content || "No content"}
            </p>

            <p className="mt-5 text-xs text-gray-400">
              {new Date(note.createdAt).toLocaleString()}
            </p>

            <button
              onClick={() => handleDelete(note._id)}
              className="mt-4 w-full rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NoteList;
