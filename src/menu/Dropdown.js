import saveData from "../saveData.js";

const Body = document.getElementsByTagName("body")[0];

export default class Dropdown {
    /**
     * @param {import("../types/DropdownItem").DropdownOption} DropdownOption
     */
    constructor(DropdownOption) {
        this.Title = DropdownOption.Title;
        this.func = DropdownOption.func;
        this.clickable = DropdownOption.clickable;
        if (Array.isArray(DropdownOption.Items)) {
            this.Items = [];
            for (let i = 0; i < DropdownOption.Items.length; i++) {
                this.Items.push(new Dropdown(DropdownOption.Items[i]));
            }
        }

        if (DropdownOption.Items) {
            // Crate element
            this.ele = document.createElement("div");
            this.ele.classList.add("dropdown");
            this.ele.dataset.id = this.id;
            // Create Title element
            const titleNode = document.createElement("div");
            titleNode.innerText = DropdownOption.Title;
            titleNode.classList.add("title");
            this.ele.append(titleNode);
            // Create Item Container
            const itemContainer = document.createElement("div");
            itemContainer.classList.add("item-container");
            this.ele.append(itemContainer);
            // Create Item elements
            this.ItemNodes = [];
            for (let i = 0; i < DropdownOption.Items.length; i++) {
                /** @type {import("../types/DropdownItem").DropdownOption} */
                const ItemData = DropdownOption.Items[i];
                
                const itemNode = document.createElement("div");
                itemNode.classList.add("dropdown-item")
                itemNode.dataset.idx = i;
                itemNode.clickable = ItemData.clickable;
                if (Array.isArray(ItemData.Items)) {
                    itemNode.classList.add("menu");
                    itemNode.onclick = (e) => this.Items[i].openAt(e.clientX, e.clientY);
                } else {
                    itemNode.onclick = (e) => ItemData.clickable(saveData) && ItemData.func(saveData);
                }
                itemNode.innerText = ItemData.Title;
    
                this.ItemNodes.push(itemNode);
                itemContainer.append(itemNode);
            }
        }
    }

    openAt(x, y) {
        this.ele.style.left = x + "px";
        this.ele.style.top = y + "px";

        for (let i = 0; i < this.Items.length; i++) {
            const item = this.Items[i];
            if (typeof item.clickable !== "undefined") {
                const isClickable = item.clickable(saveData);
                this.ItemNodes[i].style.opacity = isClickable ? 1 : 0.3;
            }
        }

        Body.append(this.ele);
    }

    close() {
        [...document.getElementsByClassName("dropdown")].map(e => e.parentElement.removeChild(e));
    }
}