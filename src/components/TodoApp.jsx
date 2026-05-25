import { SquarePen, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { NOTAS_API } from "../constants";
import { http } from "../services/httpService";
import styles from "./TodoApp.module.css";
import TodoEditForm from "./TodoEditForm/TodoEditForm";
import TodoForm from "./TodoForm/TodoForm";

export default function TodoApp() {
  const [notas, setNotas] = useState([]);
  const [notaEditando, setNotaEditando] = useState(null);

  useEffect(() => {
    http.get(NOTAS_API.GET_ALL).then((notasList) => setNotas(notasList));
  }, []);

  const agregarNota = (nota) => {
    setNotas([...notas, nota]);
  };

  const eliminarNota = (id) => {
    setNotas(notas.filter((nota) => nota.id !== id));
    http.delete(NOTAS_API.DELETE(id));
  };

  const toggleCompletarNota = (notaActual) => {
    const notaActualizada = {
      ...notaActual,
      completed: !notaActual.completed,
    };

    http
      .patch(NOTAS_API.UPDATE(notaActual.id), {
        completed: notaActualizada.completed,
      })
      .then(() => {
        setNotas((prevNotas) =>
          prevNotas.map((nota) =>
            nota.id === notaActualizada.id ? notaActualizada : nota,
          ),
        );
      });
  };

  const editarNota = (notaActualizada) => {
    setNotas(
      notas.map((nota) =>
        nota.id === notaActualizada.id ? notaActualizada : nota,
      ),
    );
  };

  return (
    <>
      <h1 className={styles.titulo}>Notas</h1>
      <TodoForm agregarNota={agregarNota} />
      <ul className={styles.nodeList}>
        {notas.map((nota) => (
          <li className={styles.noteItem} key={nota.id}>
            <div className={styles.noteContent}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={nota.completed}
                  onChange={() => toggleCompletarNota(nota)}
                />
                <span className={nota.completed ? styles.completed : ""}>
                  {nota.text}
                </span>
              </label>
              <span className={styles.noteStatus}>
                {nota.completed ? "Completada" : "Pendiente"}
              </span>
            </div>
            <div className={styles.iconsContainer}>
              <SquarePen onClick={() => setNotaEditando(nota.id)} size={20} />
              <Trash onClick={() => eliminarNota(nota.id)} size={20} />
            </div>
            {notaEditando === nota.id && (
              <div className={styles.editFormContainer}>
                <TodoEditForm
                  nota={nota}
                  onEditarNota={editarNota}
                  onCancelar={() => setNotaEditando(null)}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
