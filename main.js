(function() {     // not really necessary (just to hide our variables from the outside scope)

    
    const accordion = document.getElementsByClassName("faq_button");     // the .accordion buttons (no need for panels, we can get them using nextElementSibling)
    let current = -1;                                                   // the index of the current active accordion element (-1 indicate that currently no element is active)

    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function(e) {    
            e.preventDefault();         // when clicking a .accordion element
            if (i !== current && current !== -1) {                      // if this is not the currently active element (i !== current), and if there is a currently active element (current !== -1)
                accordion[current].classList.remove('active');          // then desactivate the currently active element
                accordion[current].nextElementSibling.classList.remove('panel-open'); // ...
            }
            this.nextElementSibling.classList.toggle('panel-open');     // now toggle the current element
            current = this.classList.toggle('active') ? i : -1;         // ... (if this element is toggled on, then set current to be this element, if it is toggled off then set current to -1 as there will be no active elements)
        });
    };
})();

(function() {
    const workshop_wrapper = document.getElementById("workshop_wrapper");
})();
