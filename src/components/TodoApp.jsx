import { useState } from "react";
import styles from "./TodoApp.css";

function TodoApp() {
  const notasList = [
    {
      id: crypto.randomUUID(),
      title: "Nota 1",
      content: "Contenido de la nota 1",
    },
    {
      id: crypto.randomUUID(),
      title: "Nota 2",
      content: "Contenido de la nota 2",
    },
    {
      id: crypto.randomUUID(),
      title: "Nota 3",
      content: "Contenido de la nota 3",
    },
  ];

  const [notas, setNotas] = useState(notasList);

  return (
    <>
      <h1 className={styles.titulo}>Notas</h1>
      <ul className={styles.nodeList}>
        {notas.map((nota) => (
          <li key={nota.id}>
            <h2>{nota.title}</h2>
            <p>{nota.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoApp;
