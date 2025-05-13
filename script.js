document.addEventListener("DOMContentLoaded", () => {
    const missionVision = document.querySelector(".vision-mission");

    missionVision.addEventListener("mouseover", () => {
        missionVision.style.transform = "rotate(0deg)";
    });

    missionVision.addEventListener("mouseout", () => {
        missionVision.style.transform = "rotate(0deg)";
    });
});