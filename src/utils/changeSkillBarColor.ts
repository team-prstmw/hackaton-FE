export function changeSkillBarColor(level: number): HTMLDivElement {
  const skillBar = document.createElement("div");
  skillBar.classList.add("skill-bar__level");

  skillBar.innerText = String(level);
  if (level < 20) {
    skillBar.style.backgroundColor = "red";
  } else if (level >= 20 && level < 40) {
    skillBar.style.backgroundColor = "#ff6a00";
  } else if (level >= 40 && level < 60) {
    skillBar.style.backgroundColor = "yellow";
  } else if (level >= 60 && level < 80) {
    skillBar.style.backgroundColor = "#aaff00";
  } else skillBar.style.backgroundColor = "green";
  return skillBar;
}
