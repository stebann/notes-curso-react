import { CirclePlus } from "lucide-react";
import { useState } from "react";
import { NOTAS_API } from "../../constants";
import { http } from "../../services/httpService";
import styles from "./TodoForm.module.css";

export default function TodoForm({ agregarNota }) {
  const [textNote, setTextNote] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (textNote.trim() === "") return;
    onAgregarNota(textNote);
    setTextNote("");
  };

  const onAgregarNota = (text) => {
    const nuevaNota = {
      text,
      completed: false,
    };
    http
      .post(NOTAS_API.CREATE, nuevaNota)
      .then((notaAgregada) => agregarNota(notaAgregada));
  };

  return (
    <div className={styles.formContainer}>
      <h2>Todo Form</h2>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          placeholder="Add a new task"
          value={textNote}
          onChange={(e) => setTextNote(e.target.value)}
        />
        <button type="submit">
          <CirclePlus size={20} />
          Crear Nota
        </button>
      </form>
    </div>
  );
}
