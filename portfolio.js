// script.js

// Three.js animated background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Create particles
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 3000;
const posArray = new Float32Array(particlesCount * 3);

for(let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 100;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const particlesMaterial = new THREE.PointsMaterial({
    size: 0.05,
    color: 0x00f5ff,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

camera.position.z = 30;

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
});

function animate() {
    requestAnimationFrame(animate);
    
    particlesMesh.rotation.x += 0.0003;
    particlesMesh.rotation.y += 0.0005;
    
    camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
    camera.position.y += (mouseY * 2 - camera.position.y) * 0.02;
    camera.lookAt(scene.position);
    
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Smooth scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Intersection Observer for sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// --- Enhanced YugAI Chatbot Logic ---
function normalize(text) {
  return text.toLowerCase()
    .replace(/[^\w\s]/gi, '') // remove punctuation
    .replace(/\s+/g, ' ')     // normalize spaces
    .trim();
}

function detectIntent(message) {
  const msg = normalize(message);

  // --- PROJECT RELATED ---
  if (msg.includes("internship tracker") || msg.includes("tracker")) return "internship";
  if (msg.includes("restaurant") || msg.includes("food") || msg.includes("door dash")) return "restaurant";
  if (msg.includes("yippi") || msg.includes("notes") || msg.includes("course")) return "yippi";
  if (msg.includes("sp 500") || msg.includes("stock") || msg.includes("market")) return "sp500";
  if (msg.includes("project") || msg.includes("build") || msg.includes("made")) return "recentProjects";

  // --- EXPERIENCE / TEACHING ---
  if (msg.includes("teach") || msg.includes("assistant") || msg.includes("ta")) return "teaching";

  // --- SKILLS ---
  if (msg.includes("skill") || msg.includes("technology") || msg.includes("tools")) return "skills";

  // --- CONTACT ---
  if (msg.includes("contact") || msg.includes("email") || msg.includes("reach") || msg.includes("linkedin")) return "contact";

  // --- GITHUB / LINKS ---
  if (msg.includes("github") || msg.includes("repository") || msg.includes("repo")) return "github";

  // --- GENERAL GREETINGS ---
  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) return "greeting";

  return "unknown";
}

function getResponse(intent) {
  const responses = {
    greeting: [
      "Hey there 👋 I’m YugAI — your guide to all things Yug!",
      "Hi! I'm YugAI, here to help you explore Yug's projects, skills, and more.",
    ],
    recentProjects: [
      "Yug's most recent projects are the Internship Tracker and Restaurant Management System — both built in 2025! 🚀",
      "Yug recently built the Internship Tracker (a web app for managing internship applications) and a Restaurant Management System for his OOP class 🍔.",
    ],
    internship: [
      "The Internship Tracker helps users track internship applications. It’s live here 🌐 https://yug-more.github.io/Internship-Tracker/ and on GitHub 💻 https://github.com/Yug-More/Internship-Tracker",
    ],
    restaurant: [
      "Yug created a Restaurant Management System for his Object-Oriented Programming course. It simulates a DoorDash-style ordering system 🍽️. Check it out here: https://github.com/Ab2d248/CS151Fall25_RestaurantManagement",
    ],
    yippi: [
      "Yug built Yippi 📚 — a full-stack web app for students to upload and access course notes using Node.js, MySQL, and JavaScript.",
    ],
    sp500: [
      "The S&P 500 Explorer 📊 analyzes data from 500+ companies, performing ANOVA, regression, and visualization using Python, Pandas, and Matplotlib.",
    ],
    teaching: [
      "Yug is a Teaching Assistant for both Python and Java at San Jose State University, mentoring 400+ students over multiple semesters 👨‍🏫.",
    ],
    skills: [
      "Yug is skilled in Python 🐍, Java ☕, React ⚛️, Flask 🔥, SQL 🗄️, and Data Analytics 📊. He also works with Docker, TensorFlow, and Pandas.",
    ],
    github: [
      "You can explore Yug’s GitHub profile here 💻 https://github.com/Yug-More — it’s packed with cool projects!",
    ],
    contact: [
      "You can reach Yug via 📧 yugmore20@gmail.com or connect on 💼 LinkedIn: https://linkedin.com/in/yugmore13",
    ],
    unknown: [
      "Hmm, I’m not sure about that 🤔. Try asking about Yug’s projects, teaching, skills, or GitHub!",
    ],
  };

  const replyList = responses[intent] || responses.unknown;
  return replyList[Math.floor(Math.random() * replyList.length)];
}

function toggleChat() {
  document.getElementById("chatbot-container").classList.toggle("open");
}

function sendMessage() {
  const input = document.getElementById("chat-input");
  const chatOutput = document.getElementById("chat-output");
  const userText = input.value.trim();
  if (!userText) return;

  // User message
  const userMsg = document.createElement("div");
  userMsg.className = "user-msg";
  userMsg.textContent = `🧑‍💻 ${userText}`;
  chatOutput.appendChild(userMsg);

  // Typing animation
  const typingMsg = document.createElement("div");
  typingMsg.className = "bot-msg";
  typingMsg.textContent = "🤖 YugAI is thinking...";
  chatOutput.appendChild(typingMsg);
  chatOutput.scrollTop = chatOutput.scrollHeight;

  // Generate reply
  setTimeout(() => {
    const intent = detectIntent(userText);
    const reply = getResponse(intent);
    typingMsg.textContent = `🤖 ${reply}`;
    chatOutput.scrollTop = chatOutput.scrollHeight;
  }, 800);

  input.value = "";
}
