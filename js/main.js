const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach((counter) => {
    const getCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const getSpeed = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + getSpeed);
            setTimeout(getCounter, 1);
        } else {
            counter.innerText = target;
        }
    }

    getCounter();
})