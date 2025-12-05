* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

body {
    background: #f7f7f7;
    color: #333;
}

/* HEADER */
header {
    text-align: center;
    padding: 80px 20px;
    background: white;
    animation: fadeIn 1s ease-in-out;
}

header h1 {
    font-size: 2.5rem;
    font-weight: 600;
}

header p {
    margin-top: 10px;
    font-size: 1rem;
    color: #555;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.btn {
    margin-top: 25px;
    display: inline-block;
    background: #0f62fe;
    color: white;
    padding: 12px 28px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 500;
    transition: 0.3s;
}

.btn:hover {
    background: #004db3;
    transform: translateY(-3px);
}

/* ABOUT */
.about, .projects {
    padding: 60px 20px;
    text-align: center;
}

.about h2, .projects h2 {
    font-size: 1.8rem;
    margin-bottom: 15px;
}

/* PROJECT IMAGE */
.preview {
    margin-top: 20px;
    width: 60%;
    max-width: 380px;
    border-radius: 12px;
    box-shadow: 0 4px 18px rgba(0,0,0,0.12);
    animation: fadeInUp 1s ease;
}

/* FOOTER */
footer {
    text-align: center;
    padding: 20px;
    background: #111;
    color: white;
    margin-top: 40px;
}

/* ANIMATIONS */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
