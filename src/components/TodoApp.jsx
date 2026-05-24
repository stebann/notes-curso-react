import { useEffect, useState } from "react";
import { API_BASE_URL, NOTAS_API } from "../constants";
import styles from "./TodoApp.module.css";

function TodoApp() {
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/${NOTAS_API.GET_ALL}`)
      .then((response) => response.json())
      .then((notasList) => setNotas(notasList));
  }, []);

  return (
    <>
      <h1 className={styles.titulo}>Notas</h1>
      <ul className={styles.nodeList}>
        {notas.map((nota) => (
          <li className={styles.noteItem} key={nota.id}>
            {nota.text} {nota.completed ? "❎" : "🟥"}
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoApp;
