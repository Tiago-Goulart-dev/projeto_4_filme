document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (botao) {
      const abaAlvo = botao.target.dataset.tabButton;
      const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
      escondeTodasAbas();
      aba.classList.add("galeria__list--is-active");
      removeBotaoAtivo();
      botao.target.classList.add("galeria__abas__button--is-active");
    });
  }
});

function removeBotaoAtivo() {
  const buttons = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("galeria__abas__button--is-active");
  }
}

function escondeTodasAbas() {
  const abasContainer = document.querySelectorAll("[data-tab-id]");

  for (let i = 0; i < abasContainer.length; i++) {
    abasContainer[i].classList.remove("galeria__list--is-active");
  }
}
