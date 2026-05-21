/* ════════════════════════════════════════════════
   DEFAULT RESUME DATA SCHEMA
   ════════════════════════════════════════════════ */
const defaultResumeData = {
    fullName: "Muhammad Faez Bin Musa",
    jobTitle: "Software Programmer",
    profileImg: "https://ui-avatars.com/api/?name=Muhammad+Faez&background=ffffff&color=1a3a5c&size=150&bold=true",
    personalInfo: {
        address: "B3-1-1 Blok B Jalan 6/3B, Taman Indah Murni, Segar, Kuala Lumpur, 51200, Malaysia",
        phone: "0113886629",
        email: "faizmusak@gmail.com",
        nationality: "Malaysian",
        license: "Driving Licence: B2, D"
    },
    skills: [
        { name: "Java Programming", level: 85 },
        { name: "Python Programming", level: 75 },
        { name: "Php Programming", level: 90 },
        { name: "Java Script", level: 80 },
        { name: "SQL", level: 88 },
        { name: "Linux", level: 70 }
    ],
    hobbies: ["Hiking", "Photography"],
    references: [
        { name: "Jumat Bin Tamir, Gross Synergy Sdn Bhd", contact: "014-8731320" },
        { name: "Muhammad Azri Baharuddin Bin Abdul Razak, Solution X Software", contact: "013-262 1482" },
        { name: "Professor Ts Dr Muhammad Suzuri Bin Hitam, University Malaysia Terengganu", contact: "019-980 3489" },
        { name: "Pn Nor Fatimah Binti A. Aziz, Kolej Vokasional Sungai Buloh", contact: "017-404 8458" }
    ],
    summary: "To obtain a position as a software engineer in a fast-paced organisation where technical skills and creative thinking are useful. <strong>2 years of hands-on experience</strong> in designing, developing, and maintaining web and software applications. My expertise covers the full software development lifecycle, from gathering requirements and writing clean, efficient code to testing, deployment, and post-release support. Skilled in PHP, JavaScript, Python, SQL.",
    workExperience: [
        {
            role: "Software Programmer",
            company: "Gross Synergy Sdn Bhd, Ampang Jaya, Selangor",
            period: "March 2023 – Present",
            bullets: [
                "Developed, maintained, and enhanced Point of Sale (POS) system to ensure smooth and efficient business operations.",
                "Designed and implemented features for sales transactions, inventory management, user access control, and reporting modules.",
                "Troubleshoot and resolved system errors, bugs, and performance issues to ensure high system reliability.",
                "Worked with databases (MySQL Server) to manage product data, customer records, and transaction history.",
                "Customized POS solutions to meet client-specific business requirements."
            ]
        },
        {
            role: "Internship (Software Programmer)",
            company: "Solution X Software Sdn Bhd, Petaling Jaya, Selangor",
            period: "July – January 2023",
            bullets: [
                "To plan and design the structure and design of web pages.",
                "To develop and enhance extra features that can enhance the user experience.",
                "Participate in the entire application lifecycle, focusing on coding and debugging.",
                "Write clean code to develop functional web applications.",
                "Troubleshoot and debug applications."
            ]
        },
        {
            role: "Internship (Machine Operator)",
            company: "DayBrite Sdn Bhd, Shah Alam, Selangor",
            period: "November 2016 – April 2017",
            bullets: [
                "Ensure maximum client satisfaction by providing exceptional and personalised service, enhancing client satisfaction.",
                "Control and adjust CNC machine setting.",
                "Feed raw materials or part to semi-automated machine.",
                "Fix issue that might occur during the shift."
            ]
        }
    ],
    education: [
        {
            degree: "Bachelor of Computer Science (Software Engineering) with Honours",
            school: "Universiti Teknologi MARA (UiTM)",
            period: "2019 – 2023",
            detail: "Faculty of Computer & Mathematical Sciences, Shah Alam, Selangor"
        },
        {
            degree: "Diploma in Computer Science",
            school: "Universiti Teknologi MARA (UiTM)",
            period: "2016 – 2019",
            detail: "Faculty of Computer & Mathematical Sciences, Kuala Pilah, Negeri Sembilan"
        }
    ]
};

let isEditMode = false;

/* ════════════════════════════════════════════════
   APP INITIALIZATION
   ════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
    loadResume();
});

/* ════════════════════════════════════════════════
   EDIT MODE CONTROLLER
   ════════════════════════════════════════════════ */
function toggleEdit() {
    isEditMode = !isEditMode;
    const body = document.body;
    const toggleBtn = document.getElementById("toggleEditBtn");
    
    if (isEditMode) {
        body.classList.add("edit-active");
        toggleBtn.classList.add("active");
        toggleBtn.querySelector("span").textContent = "Finish Editing";
        toggleBtn.querySelector("i").className = "fa-solid fa-check";
        
        // Turn contenteditable on
        setEditable(true);
        showToast("Edit Mode Enabled. Click any text to customize details.", "success");
    } else {
        body.classList.remove("edit-active");
        toggleBtn.classList.remove("active");
        toggleBtn.querySelector("span").textContent = "Edit Mode";
        toggleBtn.querySelector("i").className = "fa-solid fa-pen-to-square";
        
        // Turn contenteditable off
        setEditable(false);
        showToast("Edit Mode Disabled.", "info");
    }
}

function setEditable(value) {
    const editableSelectors = [
        "#fullName", "#jobTitle", ".info-list li span", 
        ".skill-name", ".hobby-name", ".ref-name", ".ref-contact",
        "#summary", ".job-role", ".job-company", ".job-period", 
        ".job-bullets", ".edu-degree", ".edu-school", ".edu-period", ".edu-detail"
    ];
    
    editableSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.setAttribute("contenteditable", value ? "true" : "false");
        });
    });
}

/* ════════════════════════════════════════════════
   PREVIEW MODE CONTROLLER
   ════════════════════════════════════════════════ */
function togglePreview() {
    const body = document.body;
    const resume = document.getElementById("resume");
    const previewBtn = document.getElementById("togglePreviewBtn");
    
    const isPrint = body.classList.toggle("print-mode");
    resume.classList.toggle("print-mode");
    
    if (isPrint) {
        previewBtn.classList.add("active");
        previewBtn.querySelector("span").textContent = "Glass Design";
        previewBtn.querySelector("i").className = "fa-solid fa-wand-magic-sparkles";
        showToast("Switched to Print Preview. This shows the PDF layout.", "info");
    } else {
        previewBtn.classList.remove("active");
        previewBtn.querySelector("span").textContent = "Print Preview";
        previewBtn.querySelector("i").className = "fa-solid fa-eye";
        showToast("Switched back to Glass Design view.", "info");
    }
}

/* ════════════════════════════════════════════════
   PHOTO CUSTOMIZATION
   ════════════════════════════════════════════════ */
function changePhoto(event) {
    const file = event.target.files[0];
    if (file) {
        if (file.size > 2 * 1024 * 1024) {
            showToast("Photo exceeds 2MB limit.", "error");
            return;
        }
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("profileImg").src = e.target.result;
            showToast("Profile image loaded successfully.", "success");
        };
        reader.readAsDataURL(file);
    }
}

/* ════════════════════════════════════════════════
   MODALS STATE CONTROLLERS
   ════════════════════════════════════════════════ */
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    // Clear typical input fields inside the closed modal
    const modal = document.getElementById(modalId);
    modal.querySelectorAll("input[type='text'], textarea").forEach(input => input.value = "");
    const slider = modal.querySelector("input[type='range']");
    if (slider) {
        slider.value = 75;
        updateSkillBadge(75);
    }
}

function handleOverlayClick(event, modalId) {
    if (event.target.id === modalId) {
        closeModal(modalId);
    }
}

function updateSkillBadge(val) {
    const badge = document.getElementById("skillLevelVal");
    if (badge) badge.textContent = val + "%";
}

/* ════════════════════════════════════════════════
   ADD & REMOVE OPERATIONS (CRUD)
   ════════════════════════════════════════════════ */
function removeEntry(button) {
    const item = button.closest('.skill-item, .hobby-item, .ref-item, .job-entry, .edu-entry');
    if (item) {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8) translateY(-10px)';
        setTimeout(() => {
            item.remove();
            showToast("Entry removed successfully.", "info");
        }, 250);
    }
}

function confirmAddSkill() {
    const name = document.getElementById("newSkillName").value.trim();
    const level = document.getElementById("newSkillLevel").value;
    
    if (!name) {
        showToast("Please enter a skill name.", "error");
        return;
    }
    
    const skillsList = document.getElementById("skillsList");
    const skillItem = document.createElement("div");
    skillItem.className = "skill-item";
    skillItem.innerHTML = `
        <span class="skill-name" contenteditable="${isEditMode}">${name}</span>
        <div class="skill-bar">
            <div class="skill-fill" style="width:${level}%"></div>
        </div>
        <button class="remove-btn" onclick="removeEntry(this)" style="display:${isEditMode ? 'inline-flex' : 'none'};" title="Delete skill">
            <i class="fa-solid fa-trash-can"></i>
        </button>
    `;
    
    skillsList.appendChild(skillItem);
    closeModal("skillModal");
    showToast("Skill added successfully.", "success");
}

function confirmAddHobby() {
    const name = document.getElementById("newHobbyName").value.trim();
    
    if (!name) {
        showToast("Please enter a hobby name.", "error");
        return;
    }
    
    const hobbiesList = document.getElementById("hobbiesList");
    const hobbyItem = document.createElement("div");
    hobbyItem.className = "hobby-item";
    hobbyItem.innerHTML = `
        <span class="hobby-name" contenteditable="${isEditMode}">${name}</span>
        <button class="remove-btn" onclick="removeEntry(this)" style="display:${isEditMode ? 'inline-flex' : 'none'};" title="Delete hobby">
            <i class="fa-solid fa-trash-can"></i>
        </button>
    `;
    
    hobbiesList.appendChild(hobbyItem);
    closeModal("hobbyModal");
    showToast("Hobby added successfully.", "success");
}

function confirmAddReference() {
    const name = document.getElementById("newRefName").value.trim();
    const contact = document.getElementById("newRefContact").value.trim();
    
    if (!name || !contact) {
        showToast("Please enter reference name and contact details.", "error");
        return;
    }
    
    const referencesList = document.getElementById("referencesList");
    const refItem = document.createElement("div");
    refItem.className = "ref-item";
    refItem.innerHTML = `
        <p class="ref-name" contenteditable="${isEditMode}">${name}</p>
        <p class="ref-contact" contenteditable="${isEditMode}">${contact}</p>
        <button class="remove-btn" onclick="removeEntry(this)" style="display:${isEditMode ? 'inline-flex' : 'none'};" title="Delete reference">
            <i class="fa-solid fa-trash-can"></i>
        </button>
    `;
    
    referencesList.appendChild(refItem);
    closeModal("refModal");
    showToast("Reference added successfully.", "success");
}

function confirmAddWork() {
    const role = document.getElementById("newWorkRole").value.trim();
    const period = document.getElementById("newWorkPeriod").value.trim();
    const company = document.getElementById("newWorkCompany").value.trim();
    const bulletText = document.getElementById("newWorkBullets").value.trim();
    
    if (!role || !period || !company) {
        showToast("Please fill in role, company, and period fields.", "error");
        return;
    }
    
    const bullets = bulletText ? bulletText.split('\n').map(b => b.replace(/^[•\-\*\s]+/, '').trim()).filter(b => b) : [];
    const workList = document.getElementById("workList");
    const jobEntry = document.createElement("div");
    jobEntry.className = "job-entry card-glow";
    
    let bulletsHtml = "";
    if (bullets.length > 0) {
        bulletsHtml = `<ul class="job-bullets" contenteditable="${isEditMode}">` +
            bullets.map(b => `<li>${b}</li>`).join('') +
            `</ul>`;
    } else {
        bulletsHtml = `<ul class="job-bullets" contenteditable="${isEditMode}"><li>Added new responsibility description here</li></ul>`;
    }
    
    jobEntry.innerHTML = `
        <div class="job-header">
            <div class="job-header-left">
                <h4 class="job-role" contenteditable="${isEditMode}">${role}</h4>
                <span class="job-company" contenteditable="${isEditMode}">${company}</span>
            </div>
            <div class="job-header-right">
                <span class="job-period" contenteditable="${isEditMode}">${period}</span>
                <button class="remove-btn" onclick="removeEntry(this)" style="display:${isEditMode ? 'inline-flex' : 'none'};" title="Delete experience">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>
        ${bulletsHtml}
    `;
    
    workList.appendChild(jobEntry);
    closeModal("workModal");
    showToast("Work experience added successfully.", "success");
}

function confirmAddEducation() {
    const role = document.getElementById("newEduRole").value.trim();
    const period = document.getElementById("newEduPeriod").value.trim();
    const school = document.getElementById("newEduSchool").value.trim();
    const detail = document.getElementById("newEduDetail").value.trim();
    
    if (!role || !period || !school) {
        showToast("Please fill in qualification, school, and period fields.", "error");
        return;
    }
    
    const educationList = document.getElementById("educationList");
    const eduEntry = document.createElement("div");
    eduEntry.className = "edu-entry card-glow";
    
    eduEntry.innerHTML = `
        <div class="edu-header">
            <div class="edu-header-left">
                <h4 class="edu-degree" contenteditable="${isEditMode}">${role}</h4>
                <span class="edu-school" contenteditable="${isEditMode}">${school}</span>
            </div>
            <div class="edu-header-right">
                <span class="edu-period" contenteditable="${isEditMode}">${period}</span>
                <button class="remove-btn" onclick="removeEntry(this)" style="display:${isEditMode ? 'inline-flex' : 'none'};" title="Delete education">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>
        <p class="edu-detail" contenteditable="${isEditMode}">${detail || 'Academic Department Details'}</p>
    `;
    
    educationList.appendChild(eduEntry);
    closeModal("eduModal");
    showToast("Education entry added successfully.", "success");
}

/* ════════════════════════════════════════════════
   DATA SERIALIZATION & PERSISTENCE
   ════════════════════════════════════════════════ */
function getResumeData() {
    // Scrape values from the current DOM
    const data = {};
    data.fullName = document.getElementById("fullName").innerText.trim();
    data.jobTitle = document.getElementById("jobTitle").innerText.trim();
    data.profileImg = document.getElementById("profileImg").src;
    
    // Personal Info
    data.personalInfo = {
        address: document.getElementById("infoAddress").innerText.trim(),
        phone: document.getElementById("infoPhone").innerText.trim(),
        email: document.getElementById("infoEmail").innerText.trim(),
        nationality: document.getElementById("infoNationality").innerText.trim(),
        license: document.getElementById("infoLicense").innerText.trim()
    };
    
    // Skills
    data.skills = [];
    document.querySelectorAll("#skillsList .skill-item").forEach(item => {
        const name = item.querySelector(".skill-name").innerText.trim();
        const fill = item.querySelector(".skill-fill");
        const level = fill ? parseInt(fill.style.width) : 75;
        data.skills.push({ name, level });
    });
    
    // Hobbies
    data.hobbies = [];
    document.querySelectorAll("#hobbiesList .hobby-item").forEach(item => {
        data.hobbies.push(item.querySelector(".hobby-name").innerText.trim());
    });
    
    // References
    data.references = [];
    document.querySelectorAll("#referencesList .ref-item").forEach(item => {
        const name = item.querySelector(".ref-name").innerText.trim();
        const contact = item.querySelector(".ref-contact").innerText.trim();
        data.references.push({ name, contact });
    });
    
    // Summary
    data.summary = document.getElementById("summary").innerHTML.trim();
    
    // Work Experience
    data.workExperience = [];
    document.querySelectorAll("#workList .job-entry").forEach(item => {
        const role = item.querySelector(".job-role").innerText.trim();
        const company = item.querySelector(".job-company").innerText.trim();
        const period = item.querySelector(".job-period").innerText.trim();
        
        const bullets = [];
        item.querySelectorAll(".job-bullets li").forEach(li => {
            bullets.push(li.innerText.trim());
        });
        
        data.workExperience.push({ role, company, period, bullets });
    });
    
    // Education
    data.education = [];
    document.querySelectorAll("#educationList .edu-entry").forEach(item => {
        const degree = item.querySelector(".edu-degree").innerText.trim();
        const school = item.querySelector(".edu-school").innerText.trim();
        const period = item.querySelector(".edu-period").innerText.trim();
        const detail = item.querySelector(".edu-detail").innerText.trim();
        data.education.push({ degree, school, period, detail });
    });
    
    return data;
}

function renderResume(data) {
    // Fill text strings
    document.getElementById("fullName").innerHTML = data.fullName;
    document.getElementById("jobTitle").innerHTML = data.jobTitle;
    document.getElementById("profileImg").src = data.profileImg;
    
    // Personal Info
    document.getElementById("infoAddress").innerHTML = data.personalInfo.address;
    document.getElementById("infoPhone").innerHTML = data.personalInfo.phone;
    document.getElementById("infoEmail").innerHTML = data.personalInfo.email;
    document.getElementById("infoNationality").innerHTML = data.personalInfo.nationality;
    document.getElementById("infoLicense").innerHTML = data.personalInfo.license;
    
    // Skills list
    const skillsList = document.getElementById("skillsList");
    skillsList.innerHTML = "";
    data.skills.forEach(skill => {
        const skillItem = document.createElement("div");
        skillItem.className = "skill-item";
        skillItem.innerHTML = `
            <span class="skill-name" contenteditable="${isEditMode}">${skill.name}</span>
            <div class="skill-bar">
                <div class="skill-fill" style="width:${skill.level}%"></div>
            </div>
            <button class="remove-btn" onclick="removeEntry(this)" style="display:${isEditMode ? 'inline-flex' : 'none'};" title="Delete skill">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        `;
        skillsList.appendChild(skillItem);
    });
    
    // Hobbies list
    const hobbiesList = document.getElementById("hobbiesList");
    hobbiesList.innerHTML = "";
    data.hobbies.forEach(hobby => {
        const hobbyItem = document.createElement("div");
        hobbyItem.className = "hobby-item";
        hobbyItem.innerHTML = `
            <span class="hobby-name" contenteditable="${isEditMode}">${hobby}</span>
            <button class="remove-btn" onclick="removeEntry(this)" style="display:${isEditMode ? 'inline-flex' : 'none'};" title="Delete hobby">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        `;
        hobbiesList.appendChild(hobbyItem);
    });
    
    // References list
    const referencesList = document.getElementById("referencesList");
    referencesList.innerHTML = "";
    data.references.forEach(ref => {
        const refItem = document.createElement("div");
        refItem.className = "ref-item";
        refItem.innerHTML = `
            <p class="ref-name" contenteditable="${isEditMode}">${ref.name}</p>
            <p class="ref-contact" contenteditable="${isEditMode}">${ref.contact}</p>
            <button class="remove-btn" onclick="removeEntry(this)" style="display:${isEditMode ? 'inline-flex' : 'none'};" title="Delete reference">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        `;
        referencesList.appendChild(refItem);
    });
    
    // Summary
    document.getElementById("summary").innerHTML = data.summary;
    
    // Work Experience
    const workList = document.getElementById("workList");
    workList.innerHTML = "";
    data.workExperience.forEach(work => {
        const jobEntry = document.createElement("div");
        jobEntry.className = "job-entry card-glow";
        
        let bulletsHtml = "";
        if (work.bullets && work.bullets.length > 0) {
            bulletsHtml = `<ul class="job-bullets" contenteditable="${isEditMode}">` +
                work.bullets.map(b => `<li>${b}</li>`).join('') +
                `</ul>`;
        }
        
        jobEntry.innerHTML = `
            <div class="job-header">
                <div class="job-header-left">
                    <h4 class="job-role" contenteditable="${isEditMode}">${work.role}</h4>
                    <span class="job-company" contenteditable="${isEditMode}">${work.company}</span>
                </div>
                <div class="job-header-right">
                    <span class="job-period" contenteditable="${isEditMode}">${work.period}</span>
                    <button class="remove-btn" onclick="removeEntry(this)" style="display:${isEditMode ? 'inline-flex' : 'none'};" title="Delete experience">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>
            ${bulletsHtml}
        `;
        workList.appendChild(jobEntry);
    });
    
    // Education
    const educationList = document.getElementById("educationList");
    educationList.innerHTML = "";
    data.education.forEach(edu => {
        const eduEntry = document.createElement("div");
        eduEntry.className = "edu-entry card-glow";
        eduEntry.innerHTML = `
            <div class="edu-header">
                <div class="edu-header-left">
                    <h4 class="edu-degree" contenteditable="${isEditMode}">${edu.degree}</h4>
                    <span class="edu-school" contenteditable="${isEditMode}">${edu.school}</span>
                </div>
                <div class="edu-header-right">
                    <span class="edu-period" contenteditable="${isEditMode}">${edu.period}</span>
                    <button class="remove-btn" onclick="removeEntry(this)" style="display:${isEditMode ? 'inline-flex' : 'none'};" title="Delete education">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>
            <p class="edu-detail" contenteditable="${isEditMode}">${edu.detail}</p>
        `;
        educationList.appendChild(eduEntry);
    });
    
    // Refresh contenteditable attribute depending on isEditMode
    setEditable(isEditMode);
}

function saveResume() {
    try {
        const data = getResumeData();
        localStorage.setItem("faez_resume_builder_data", JSON.stringify(data));
        showToast("Resume configurations saved locally!", "success");
    } catch (e) {
        console.error(e);
        showToast("Failed to save resume configurations.", "error");
    }
}

function loadResume() {
    try {
        const saved = localStorage.getItem("faez_resume_builder_data");
        if (saved) {
            const data = JSON.parse(saved);
            renderResume(data);
        } else {
            // Load defaults
            renderResume(defaultResumeData);
        }
    } catch (e) {
        console.error(e);
        renderResume(defaultResumeData);
    }
}

function resetResume() {
    if (confirm("Resetting will erase all customizations and reload the original resume details. Proceed?")) {
        localStorage.removeItem("faez_resume_builder_data");
        // Ensure edit mode is closed
        if (isEditMode) toggleEdit();
        // Turn off print mode preview
        if (document.body.classList.contains("print-mode")) togglePreview();
        
        renderResume(defaultResumeData);
        showToast("Reset completed successfully.", "success");
    }
}

/* ════════════════════════════════════════════════
   EXPORTS SYSTEM (PDF & JPEG)
   ════════════════════════════════════════════════ */
function generatePDF() {
    const resumeEl = document.getElementById("resume");
    
    // Check states
    const wasEditMode = isEditMode;
    const wasPrintMode = document.body.classList.contains("print-mode");
    
    // Disable edit mode elements temporarily
    if (wasEditMode) {
        toggleEdit();
    }
    
    // Force print mode styling dynamically
    if (!wasPrintMode) {
        document.body.classList.add("print-mode");
        resumeEl.classList.add("print-mode");
    }
    
    showToast("Preparing document and generating PDF...", "info");
    
    const opt = {
        margin: 0.15,
        filename: 'Muhammad_Faez_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2, 
            useCORS: true, 
            letterRendering: true,
            logging: false,
            backgroundColor: '#ffffff'
        },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    
    // Trigger conversion
    html2pdf().from(resumeEl).set(opt).save().then(() => {
        // Revert style states
        if (!wasPrintMode) {
            document.body.classList.remove("print-mode");
            resumeEl.classList.remove("print-mode");
        }
        if (wasEditMode) {
            toggleEdit();
        }
        showToast("PDF exported successfully!", "success");
    }).catch(err => {
        console.error(err);
        showToast("PDF generation failed.", "error");
        
        // Revert anyway
        if (!wasPrintMode) {
            document.body.classList.remove("print-mode");
            resumeEl.classList.remove("print-mode");
        }
        if (wasEditMode) {
            toggleEdit();
        }
    });
}

function generateJPEG() {
    const resumeEl = document.getElementById("resume");
    
    // Check states
    const wasEditMode = isEditMode;
    const wasPrintMode = document.body.classList.contains("print-mode");
    
    // Disable edit mode elements temporarily
    if (wasEditMode) {
        toggleEdit();
    }
    
    // Force print mode styling dynamically for image high resolution
    if (!wasPrintMode) {
        document.body.classList.add("print-mode");
        resumeEl.classList.add("print-mode");
    }
    
    showToast("Rendering snapshot and exporting image...", "info");
    
    // Delay slightly to let browser complete rendering cycle
    setTimeout(() => {
        html2canvas(resumeEl, {
            scale: 2,
            useCORS: true,
            backgroundColor: '#ffffff',
            logging: false
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'Muhammad_Faez_Resume.jpg';
            link.href = canvas.toDataURL('image/jpeg', 0.95);
            link.click();
            
            // Revert styles
            if (!wasPrintMode) {
                document.body.classList.remove("print-mode");
                resumeEl.classList.remove("print-mode");
            }
            if (wasEditMode) {
                toggleEdit();
            }
            showToast("JPEG exported successfully!", "success");
        }).catch(err => {
            console.error(err);
            showToast("JPEG generation failed.", "error");
            
            // Revert styles
            if (!wasPrintMode) {
                document.body.classList.remove("print-mode");
                resumeEl.classList.remove("print-mode");
            }
            if (wasEditMode) {
                toggleEdit();
            }
        });
    }, 400);
}

/* ════════════════════════════════════════════════
   TOAST NOTIFICATION ENGINE
   ════════════════════════════════════════════════ */
function showToast(message, type = "success") {
    const container = document.getElementById("toastContainer");
    if (!container) return;
    
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    
    let icon = "fa-circle-check";
    if (type === "error") icon = "fa-circle-exclamation";
    else if (type === "info") icon = "fa-circle-info";
    
    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <span>${message}</span>
    `;
    
    container.appendChild(toast);
    
    // Fade out and remove toast after 3 seconds
    setTimeout(() => {
        toast.style.animation = "toastFadeOut 0.4s ease-out forwards";
        toast.addEventListener("animationend", () => {
            toast.remove();
        });
    }, 3000);
}

// Inject toast exit animation dynamically
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    @keyframes toastFadeOut {
        to {
            transform: translateY(-20px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(styleSheet);
