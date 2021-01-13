const avatar = document.getElementById("avatar");
const fightButton = document.getElementById("ken-button");
const avatarWrapper = document.getElementById("avatar-wrapper");

let skillImage = document.createElement('img');
skillImage.src = "./assets/images/skill2.gif";
skillImage.className = "skill-image";

fightButton.onclick = () => {
    avatarWrapper.appendChild(skillImage);

    setTimeout(() => {
        avatar.classList.add("animate__animated", "animate__backOutUp");
    }, 1200);

    setTimeout(() => {
        skillImage.classList.add("animate__animated", "animate__fadeOut");
        fightButton.classList.add("animate__animated", "animate__fadeOut");
    }, 1500);

    setTimeout(() => {
        avatar.setAttribute("data", "./assets/images/avatar.png");
        avatar.classList.remove("animate__backOutUp");
        avatar.classList.add("animate__backInLeft");
        fightButton.remove();
        skillImage.remove();
    }, 2000);
}
