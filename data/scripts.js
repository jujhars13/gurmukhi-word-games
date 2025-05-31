const akhar={
    "lines": [
    {
        "ੳ": "a",
        "ਅ": "aa",
        "ੲ": "i",
        "ਸ": "s",
        "ਹ": "h"
    },
    {
        "ਕ": "k",
        "ਖ": "kh",
        "ਗ": "g",
        "ਘ": "gh",
        "ਙ": "ng"
    },
    {
        "ਚ": "ch",
        "ਛ": "chh",
        "ਜ": "j",
        "ਝ": "jh",
        "ਞ": "ny"
    },
    {
        "ਟ": "tt",
        "ਠ": "tth",
        "ਡ": "dd",
        "ਢ": "ddh",
        "ਣ": "nn"
    },
    {
        "ਤ": "t",
        "ਥ": "th",
        "ਦ": "d",
        "ਧ": "dh",
        "ਨ": "n"
    },
    {
        "ਪ": "p",
        "ਫ": "ph",
        "ਬ": "b",
        "ਭ": "bh",
        "ਮ": "m"
    },
    {
        "ਯ": "y",
        "ਰ": "r",
        "ਲ": "l",
        "ਵ": "v",
        "ੜ": "rr"
    }
]
};

document.addEventListener('DOMContentLoaded', () => {
    // Your code here
    console.log('Document is ready!');

    let container = document.getElementById('container');

    akhar.lines.forEach((line) => {
        let tmp=document.createElement('span');
            tmp.className = 'letter';
            tmp.textContent = line;
            // tmp.setAttribute('data-letter', value);
            console.log(tmp);
    });

    console.log(results);


})();
