const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        // remove active from everything
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        // activate clicked tab
        tab.classList.add("active");

        // find target content
        const target = tab.getAttribute("data-tab");

        // show it
        document.getElementById(target).classList.add("active");
    });
});