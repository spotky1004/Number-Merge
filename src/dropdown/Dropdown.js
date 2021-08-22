const Body = document.getElementsByName("body")[0];

class Dropdown {
    /**
     * @param {import("../types/DropdownItem").DropdownOption} DropdownOption 
     */
    constructor(DropdownOption) {
        this.Title = DropdownOption.Title;
        if (DropdownOption.Items) {
            this.Items = new Dropdown(DropdownOption.Items);
        }

        this.ele = document.createElement("div");
        this.ele.classList.add("dropdown");
        for (let i = 0; i < this.Items; i++) {
            const item = 
        }
    }

    openAt(x, y) {
        this.ele.style.left = x + "px";
        this.ele.style.top = y + "px";
        Body.append(this.ele);
    }

    close() {
        const parent = this.ele.parentElement;
        if (parent) parent.removeChild(this.ele);
    }
}