# 🗨️ Rule-Based Chatbot with Web UI

A simple and interactive **rule-based chatbot** built using **Python (FastAPI)** and **vanilla HTML/CSS/JS**. The chatbot responds to user messages based on regex-pattern rules and supports adding new rules dynamically through a web interface — no need to touch the code!

---

## 🎥 Demo

📺 [Watch the Demo Video](https://youtu.be/Gd9-t8JYSLM)  


---

## 🚀 Features

- ✅ Rule-based chat logic using regular expressions
- ✅ Fast and lightweight backend using FastAPI
- ✅ User-friendly chat UI (HTML/CSS/JS)
- ✅ Add new rules through a web form
- ✅ No external database required
- ✅ Modular file structure and easy customization

---

## 🛠️ Installation Guide

> Tested on **Windows 10/11** & **Python 3.9+**

### 1. Install Python

Download Python from: https://www.python.org/downloads/  
Make sure to check ✅ “Add Python to PATH” during installation.

To verify Python and pip:

```bash
python --version
pip --version
```

---

### 2. Clone the Project

```bash
git clone https://github.com/sanju-k17/chatbot-rb.git
cd chatbot-rb
```

---

### 3. Install Dependencies

Use pip to install required packages:

```bash
pip install fastapi uvicorn
```

---

### 4. Run the Chatbot Locally

```bash
python -m uvicorn backend.main:app --reload
```

> ✅ Visit the chatbot UI in your browser: [http://localhost:8000](http://localhost:8000)

---

## 🧪 How to Use

### 🔹 1. Chat with the bot

- Go to the main chat page (`index.html`)
- Type a message like “hello” or “how are you”
- See the bot respond with rule-matched replies

### 🔹 2. Add New Rules

- Click **"➕ Add New Rule"**
- Enter a **pattern** (e.g., `thank you`)
- Enter a **reply** (e.g., `You're welcome! 😊`)
- The new rule becomes active instantly!

---

## 📁 Project Structure

```
chatbot-rb/
│
├── backend/
│   └── main.py              # FastAPI backend
│
├── index.html               # Chat interface
├── add_rule.html            # Add-rule form
│
├── css/
│   └── style.css            # Web styling
│
└── js/
    ├── chat.js              # Chat page logic
    └── add_rule.js          # Rule addition logic
```

---

## 🧠 Technologies Used

- **Python 3.9+**
- **FastAPI** – for backend
- **Uvicorn** – ASGI server
- **HTML, CSS, JavaScript** – frontend
- **Regex** – for rule-based matching

---

## 📌 Example Rule

| Pattern         | User Input         | Bot Reply               |
|----------------|--------------------|--------------------------|
| `hi|hello`     | "hello"            | "Hi there!"              |
| `thank you`    | "thank you"        | "You're welcome! 😊"     |

---

## 👨‍💻 Author

**Sanju Kumar A**  
🎓 BCA (Data Analytics)  
📍 Bangalore, India  
🔗 [LinkedIn](https://www.linkedin.com/in/sanjukumar1708)

---

## 📃 License

This project is licensed under the **MIT License** — free to use and modify.

---

## 🙌 Contributing

Want to improve it with file/database storage or NLP features?  
Feel free to fork this repo, open issues, and submit PRs!
