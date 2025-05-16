import Note from '../models/note.model.js';

export const createNote = async (req, res) => {
    try {
        const note = new Note({ ...req.body, user: req.user.id });
        await note.save();
        res.status(201).json(note);
    } catch {
        res.status(400).json({ error: 'Note creation failed' });
    }
};

export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    } catch {
        res.status(500).json({ error: 'Could not retrieve notes' });
    }
};

export const updateNote = async (req, res) => {
    const { id } = req.params;
    try {
        const note = await Note.findOneAndUpdate(
            { _id: id, user: req.user.id },
            req.body,
            { new: true }
        );
        if (!note) return res.status(404).json({ error: 'Note not found' });
        res.json(note);
    } catch {
        res.status(400).json({ error: 'Update failed' });
    }
};

export const deleteNote = async (req, res) => {
    const { id } = req.params;
    try {
        const note = await Note.findOneAndDelete({ _id: id, user: req.user.id });
        if (!note) return res.status(404).json({ error: 'Note not found' });
        res.json({ message: 'Note deleted' });
    } catch {
        res.status(400).json({ error: 'Delete failed' });
    }
};
