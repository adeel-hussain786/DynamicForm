```markdown
# 🌟 Dynamic Form Project 🌟

Welcome to the **Dynamic Form Project**! This is a React-based dynamic form that handles user input with built-in validation for fields like **Username**, **Email**, and **Password**. It ensures the user input meets the required criteria and provides real-time feedback.

## 🚀 Features

- **Dynamic Form Fields**:
  - 📝 **Username**: Required field.
  - 📧 **Email**: Must be in a valid email format.
  - 🔑 **Password**: Must meet complexity requirements.
- **Real-time Validation**:
  - Errors are shown as soon as invalid input is detected.
  - Password must:
    - Be at least 8 characters long.
    - Contain at least one uppercase letter (A-Z).
    - Contain at least one lowercase letter (a-z).
    - Contain at least one number (0-9).
- 💡 **Instant Feedback**: Display validation errors for easy user corrections.
- 📤 **Form Submission**: The form submits only when all fields pass validation.

---

## 🛠️ Technologies Used

- **Frontend**: 
  - ⚛️ React.js (Functional Components & Hooks)
  - 🌐 HTML5, CSS3
- **State Management**: 
  - 🎯 React `useState` hook for managing form data and errors.
- **Form Validation**: Custom validation logic for real-time user feedback.

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/adeel-hussain786/DynamicForm.git
```

### 2. Install dependencies

Navigate to the project folder:

```bash
cd DynamicForm
```

Install the necessary packages:

```bash
npm install
```

### 3. Run the Project

Start the development server:

```bash
npm start
```

Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the form in action.

---

## 📂 Folder Structure

```plaintext
DynamicForm/
├── public/             # Static files (e.g., images, index.html)
├── src/                # Source files
│   ├── DynamicForm.js  # React components (Form, Input, etc.)
│   ├── index.css       # CSS stylesheets (form styles)
│   ├── App.js          # Main React app component
│   └── index.js        # React entry point
├── .gitignore          # Git ignored files
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation (this file)
```

---

## 📝 Validation Logic

- **Username**: Required and cannot be empty.
- **Email**: Must follow the format `name@domain.com`.
- **Password**: Must meet the following requirements:
  - Minimum 8 characters.
  - At least 1 uppercase letter (A-Z).
  - At least 1 lowercase letter (a-z).
  - At least 1 digit (0-9).

---

## 📸 Screenshots

### Form Interface

![image](https://github.com/user-attachments/assets/dc2993af-b8c8-4325-b91c-ca07ba1537b3)  ![image](https://github.com/user-attachments/assets/5185a5b1-e76a-4766-8042-9ff88271b9e3) ![image](https://github.com/user-attachments/assets/f12859c2-01bb-4174-99bf-f206ab301e71)      ![image](https://github.com/user-attachments/assets/aa3376d2-9ee2-4e2f-b306-86f8e1a96e2d)
   ![image](https://github.com/user-attachments/assets/f79ea6bd-d235-4e51-ab44-2ddabae1a3ec)          ![image](https://github.com/user-attachments/assets/b0a68964-3011-407a-b9ab-561096d222c9)

---

## 🔑 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Adeel Hussain**  
Feel free to reach out for any questions or collaborations:  
[Email](mailto:mr.adeelkunbhar@gmail.com)
```
---
