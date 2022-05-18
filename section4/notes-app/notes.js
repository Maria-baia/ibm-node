import fs from "fs";
import chalk from "chalk";

const getNotes = () => {
  console.log(chalk.blue.bgYellow.bold("Your Notes:"));
  loadNotes().map((note) => console.log(note.title));
};

const addNote = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({ title: title, body: body });
    saveNotes(notes);
    console.log("New note added!");
  } else {
    console.log("Note title taken!");
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);
  saveNotes(notesToKeep);
  if (notes.length === notesToKeep.length) {
    console.log(chalk.bgRed("No note found!"));
  } else {
    console.log(chalk.bgGreen("Note removed!"));
  }
};

const readNote = (title) => {
  const noteFinded = loadNotes().find((note) => note.title === title);
  if (noteFinded) {
    console.log(noteFinded);
  } else {
    console.log(chalk.bgRed("No note found!"));
  }
};

export { getNotes, addNote, removeNote, readNote };
