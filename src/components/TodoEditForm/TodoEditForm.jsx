import { useState } from "react";
import { NOTAS_API } from "../../constants";
import { http } from "../../services/httpService";
import styles from "../TodoApp.module.css";

export default function TodoEditForm({ nota, onEditarNota, onCancelar }) {
  const [textNote, setTextNote] = useState(nota.text);

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (textNote.trim() === "") return;

    http
      .patch(NOTAS_API.UPDATE(nota.id), { text: textNote })
      .then((notaActualizada) => {
        onEditarNota(notaActualizada);
        onCancelar();
      });
  };

  return (
    <form onSubmit={handlerSubmit}>
      <input
        type="text"
        value={textNote}
        onChange={(e) => setTextNote(e.target.value)}
      />
      <button className={styles.saveButton} type="submit">
        Guardar
      </button>
      <button
        className={styles.cancelButton}
        type="button"
        onClick={onCancelar}
      >
        Cancelar
      </button>
    </form>
  );
}
