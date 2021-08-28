const stageSelect = document.getElementById("stage-select-bg");
export function toggleStageSelect() {
    if (stageSelect.style.display === "") closeStageSelect();
    else openStageSelect();
}

export function openStageSelect() {
    stageSelect.style.display = "";
}

export function closeStageSelect() {
    stageSelect.style.display = "none";
}
