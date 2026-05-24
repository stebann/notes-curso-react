import { useEffect, useState } from "react";
import styles from "./TodoApp.module.css";

function TodoApp() {
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/notas")
      .then((response) => response.json())
      .then((notasList) => setNotas(notasList));
  }, []);

  return (
    <>
      <h1 className={styles.titulo}>Notas</h1>
      <ul className={styles.nodeList}>
        {notas.map((nota) => (
          <li className={styles.noteItem} key={nota.id}>
            <h2>{nota.text}</h2>
            <p>{nota.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoApp;
