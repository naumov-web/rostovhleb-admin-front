export default (inputs) => {
    const result = {};
    for(let i = 0, len = inputs.length; i < len; i++) {
        let input = inputs[i];
        if (input.name && input.name.length > 0) {
            if (input.type === 'checkbox') {
                result[input.name] = input.checked;
                continue;
            }
            result[input.name] = input.value;
        }
    }
    return result;
};