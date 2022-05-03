module.exports = class {
    #keys = [];
    #values = [];
    clear(){
        this.#keys = [];
        this.#values = [];
    }
    size(){
        return this.#keys.length;
    }
    keySet(){
        return this.#keys;
    }
    values(){
        return this.#values;
    }
    put(key, value){
        if(this.#keys.indexOf(key) == -1){
            this.#keys.push(key);
            this.#values.push(value);
        }else{
            this.#values[this.#keys.indexOf(key)] = value
        }
    }
    remove(key){
        if(this.#keys.indexOf(key) != -1){
            this.#values.splice(this.#keys.indexOf(key), 1);
            this.#keys.splice(this.#keys.indexOf(key), 1);
        }
    }
    get(key){
        if(key){
            return this.#keys.indexOf(key) == -1 ? null : this.#values[this.#keys.indexOf(key)];
        }
        return [this.#keys, this.#values];
    }
    generate(obj, obj2){
        if(obj2){
            if(obj instanceof Array && obj2 instanceof Array){
                this.#keys = obj;
                this.#values = obj2;
            }
        }else if(obj instanceof Object){
            this.#keys = Object.keys(obj);
            this.#values = Object.values(obj);
        }else if(obj instanceof Array){
            this.#keys = Array.from(obj.keys());
            this.#values = obj;
        }
    }
}