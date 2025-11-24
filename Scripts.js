// Handle doctor form save
const form = document.getElementById("doctorForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let name = document.getElementById("doctorName").value;
        let from = document.getElementById("fromTime").value;
        let to = document.getElementById("toTime").value;

        let list = JSON.parse(localStorage.getItem("doctors") || "[]");

        list.push({ name, from, to });

        localStorage.setItem("doctors", JSON.stringify(list));

        document.getElementById("msg").classList.remove("hidden");
        form.reset();
    });
}

// MR View Page
const doctorList = document.getElementById("doctorList");

if (doctorList) {
    let list = JSON.parse(localStorage.getItem("doctors") || "[]");

    if (list.length === 0) {
        doctorList.innerHTML = `<p class="text-center text-gray-600 text-xl">No doctors added yet.</p>`;
    } else {
        list.forEach(doc => {
            doctorList.innerHTML += `
                <div class="bg-white shadow-lg p-6 rounded-xl border-l-4 border-green-500">
                    <h3 class="text-xl font-bold">${doc.name}</h3>
                    <p class="mt-2 text-gray-700">
                        <strong>Available:</strong> ${doc.from} - ${doc.to}
                    </p>
                </div>
            `;
        });
    }
}
