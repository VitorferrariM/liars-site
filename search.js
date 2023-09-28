document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const list = document.getElementById("list").getElementsByTagName("li");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        for (let i = 0; i < list.length; i++) {
            const itemText = list[i].dataset.item.toLowerCase();
            if (itemText.includes(searchTerm)) {
                list[i].style.display = "block";
            } else {
                list[i].style.display = "none";
            }
        }
    });
});




