export default (inputs) => {
    const result = {};
    for(let i = 0, len = inputs.length; i < len; i++) {
        let input = inputs[i];
        if (input.name && input.name.length > 0) {
            result[input.name] = input.value;
        }
    }
    return result;
};