

export class Stack {
    #items=[];

    static #test = [1,2,3]

    push(x){
        
        return this.#items=[...this.#items, x]
    }

    peek(){return this.#items[this.#items.length - 1]}

    pop(){return this.#items = [...this.#items.slice(0, this.#items.length-1)]}

    All(){return this.#items}
}
