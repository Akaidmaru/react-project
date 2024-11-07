import { useState } from "react";
import { Message } from "./Message";

const Form = () => {
    const [user, setUser] = useState({
        name: "",
        favoriteVideogame: "",
    });

    const [show, setShow] = useState(false); 
    const [error, setError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const regexNum = /[^\d]/;

        if (user.name.length >= 3 && regexNum.test(user.name)) {
            setError(false);
            setShow(true); 
        } else {
            setError(true);
        }
    };

    return (
        <div>
            {show ? (
                <Message name={user.name} favoriteVideogame={user.favoriteVideogame} />
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>Nombre: </label>
                    <input
                        type="text"
                        onChange={(event) =>
                            setUser({ ...user, name: event.target.value })
                        }
                    />
                    <label>Ingresa tu videojuego favorito: </label>
                    <input
                        type="text"
                        onChange={(event) =>
                            setUser({ ...user, favoriteVideogame: event.target.value })
                        }
                    />

                    <button>Enviar</button>
                    {error ? (
                        <h4 style={{ color: "red" }}>
                            Por favor, ingrese su nombre de manera correcta.
                        </h4>
                    ) : null}
                </form>
            )}
        </div>
    );
};

export default Form;
