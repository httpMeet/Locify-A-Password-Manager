# 🔐 Locify - A Modern Password Manager

Locify is a secure and user-friendly password manager built with **React**, **Tailwind CSS**, and **Parcel**. It allows users to **register**, **log in**, and **manage website credentials** (username & password) with a responsive interface and clean backend powered by **PHP and MySQL**.

---

## 🚀 Features

- ✅ User Registration & Login
- 🔐 Profile Password Verification (extra layer before viewing passwords)
- 📝 Add, View & Manage Saved Website Credentials
- ⚛️ Built with React Functional Components
- 🎨 Styled with Tailwind CSS
- ⚡ Fast Development Experience with Parcel
- 📱 Fully Responsive Design

---

## 🛠 Tech Stack

### Frontend
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Parcel](https://parceljs.org/)

### Backend
- [PHP](https://www.php.net/)
- [MySQL](https://www.mysql.com/)
- [XAMPP/WAMP/LAMP](https://www.apachefriends.org/)

---

## 📦 Installation

### 🔧 Clone the Repository

```bash
git clone https://github.com/httpMeet/Locify-A-Password-Manager.git
cd Locify-A-Password-Manager
```

### 💻 Install Frontend Dependencies

```bash
npm install
```

### ▶️ Start the React App
```bash
npm start
```

### 🌐 Backend Setup (PHP)
📁 Backend Folder Structure
Inside the root project folder, there is a directory:

```bash
locify_backend/Locify/
```

📂 Move it into your Web Server Directory:

# for XAMP
```bash
C:/xampp/htdocs/
```

# for WAMP
```bash
C:/wamp64/www/
```

# for LAMP(Linux):
```bash
/var/www/html/
```

Your PHP backend should now be accessible at:
```bash
http://localhost/Locify/
```

# 🧩 MySQL Database Setup
    ##🛠 Create Database
        ###Create a database named: locify

➕ Table 1: register
Field	Type	Null	Key	Extra
user_id	int(11)	NO	PRI	AUTO_INCREMENT
name	varchar(30)	NO		
email	varchar(50)	NO		
contact	bigint(10)	NO		
password	varchar(20)	NO		
profile_password	varchar(20)	NO

➕ Table 2: website
Field	Type	Null	Key	Extra
web_id	int(11)	NO	PRI	AUTO_INCREMENT
web_name	varchar(100)	NO		
username	varchar(20)	NO		
password	varchar(20)	NO		
reg_id	int(11)	NO

✨ Folder Structure Overview
Locify-A-Password-Manager/
├── locify_backend/
│   └── Locify/              # PHP backend files
│       ├── login.php
│       ├── register.php
│       ├── add_website.php
│       ├── home.php
│       ├── profile_password.php
│       └── connection.php
├── src/
│   ├── components/
│   ├── pages/
│       ├── Login.js
│       ├── Register.js
│       ├── Addpass.js
│       ├── Home.js
│       ├── Profilepass.js
│       └── Viewpass.js
│   ├── App.js
│   └── index.js
├── tailwind.config.js
├── .postcssrc
├── package.json
└── README.md

✅ Future Enhancements
🔐 Hashing passwords before storing in the database

📤 Backend deployment using hosting providers

📧 Email verification & OTP feature

🔄 Password update & delete functionality

🌙 Dark Mode support

🙌 Author
Made with 💙 by <a href="https://github.com/httpMeet">Meet Gandhi</a>
