// Load sample data if empty
if (!localStorage.getItem("doctors")) {
    let sampleDoctors = [
        { name: "Dr. Ramesh Mehta – Cardiologist", from: "09:00", to: "12:00" },
        { name: "Dr. Alka Shah – Dermatologist", from: "10:30", to: "13:00" },
        { name: "Dr. Hitesh Patel – Orthopedic", from: "14:00", to: "17:00" },
        { name: "Dr. Nidhi Desai – Gynecologist", from: "11:00", to: "13:30" },
        { name: "Dr. Manoj Vaghela – Neurologist", from: "16:00", to: "18:30" },
        { name: "Dr. Dhruv Parmar – ENT Specialist", from: "09:30", to: "11:30" },
        { name: "Dr. Neha Joshi – Pediatrician", to: "15:00", from: "12:00" },
        { name: "Dr. Jignesh Trivedi – General Physician", from: "17:00", to: "20:00" },
        { name: "Dr. Kajal Solanki – Dentist", from: "10:00", to: "12:00" },
        { name: "Dr. Parth Shah – Psychiatrist", from: "15:00", to: "18:00" },
        { name: "Dr. Mehul Raval – Gastroenterologist", from: "08:30", to: "10:30" },
        { name: "Dr. Priya Panchal – Ophthalmologist", from: "13:00", to: "16:00" },
        { name: "Dr. Bhavesh Chavda – Urologist", from: "11:30", to: "13:30" },
        { name: "Dr. Sonal Dave – Radiologist", from: "09:00", to: "11:00" },
        { name: "Dr. Karan Shah – Oncologist", from: "14:30", to: "17:00" }
    ];

    localStorage.setItem("doctors", JSON.stringify(sampleDoctors));
}

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

