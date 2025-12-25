const form = document.querySelector('form');
// this can give empty value also
// const height =parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);

    const weight = parseInt(document.querySelector('#weight').value);

    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `please give a valid height ${height}`;
    } 
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `please give a valid weight ${weight}`;
    } 
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>${bmi}<br></span>`;

        if (bmi > 24.9) {
            const text_node1 = document.createTextNode(
                `You are overweight beacuse your bmi is ${bmi}`
            );
            results.appendChild(text_node);
        } else if (bmi > 18.6) {
            const text_node2 = document.createTextNode(
                `You are in normal range beacuse your bmi is ${bmi}`
            );
            results.appendChild(text_node2);

        } else if (bmi < 18.6) {
            const text_node3 = document.createTextNode(
                `You are under weight beacuse your bmi is ${bmi}`
            );
            results.appendChild(text_node3);
        }
    }
});