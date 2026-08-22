const cursos = [
    {
        id:1,
        nome: "Curso de HTML e CSS",
        descricao: "Aprenda HTML e CSS do básico ao avançado",
        cargaHoraria: 40,
        Ativo: true,
        categoria: "frontend",
    },

    {
        id:2,
        nome: "Curso de JavaScript",
        descricao: "Aprenda JavaScript do básico ao avançado",
        cargaHoraria: 40,
        Ativo: true,
        categoria: "Backend",
    }
];

const listaCursos = document.querySelector("#listaCursos");
const btnTodos = document.querySelector("#btnTodos");
const btnAtivos = document.querySelector("#btnAtivos");

function renderizarCursos(listas) {
    listaCursos.innerHTML = "";

    listas.forEach(curso => {
        const card = 

        <div>
            ${curso.categoria}
            <h3>${curso.nome}</h3>
            <p>${curso.descricao}</p>
        </div>

        ;
        listaCursos.insertAdjacentHTML("beforeend", card);
    });
}

renderizarCursos(cursos);

btnTodos.addEventListener("click", () => {