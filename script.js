const botao = document.getElementById("inserir");
const inputTarefa = document.getElementById("inputTarefa");

let arrayTarefa = [];

function inserir() {
  const tarefa = inputTarefa.value.trim();
  arrayTarefa.push({ descricao: tarefa, feita: false });
  gerarLista();
  arrayTarefa.shift();
}

function gerarLista() {
  const lista = document.getElementById("listaTarefas");
  for (let i = 0; i < arrayTarefa.length; i++) {
    const novo = document.createElement("div");
    const checkbox = document.createElement("input");
    const spanp = document.createElement("p");

    checkbox.setAttribute("type", "checkbox");
    checkbox.removeAttribute("checked");
    checkbox.addEventListener("click", () => {
      checkbox.nextElementSibling.classList.toggle("checkedFalse");
    });
    spanp.textContent = arrayTarefa[i].descricao;
    const removeBt = document.createElement("button");
    removeBt.classList.add("del");
    removeBt.innerHTML = "Remover";
    novo.append(checkbox, spanp, removeBt);
    lista.appendChild(novo);
    removeBt.addEventListener("click", remover);
  }
}

function remover() {
  const removeBt = document.querySelector(".del");
  removeBt.parentElement?.remove();
}
botao.addEventListener("click", inserir);
