# 🪟 Windows User Guide - I AM CYBER SOLDIER

This project has been fully optimized to work on **Windows** as well as **macOS**. Follow these steps to set up and run the website on your Windows PC.

## 🛠️ Prerequisites

Before you start, ensure you have the following installed:

1. **Node.js (LTS Version)** - Download from [nodejs.org](https://nodejs.org/).
2. **Git for Windows** - Download from [git-scm.com](https://git-scm.com/).
3. **Visual Studio Code (Recommended)** - For editing and running commands.

---

## 🚀 How to Run on Windows

### 1. Open the Project
Open **Command Prompt (cmd)**, **PowerShell**, or the **Git Bash** terminal in the project folder.

### 2. Install Dependencies
```bash
npm install
```

### 3. Create Environment File
On Windows, you can create the file via the file explorer or the terminal:
```powershell
# In PowerShell:
New-Item .env.local -ItemType File
```
Then, add your API key:
```env
GROQ_API_KEY=YOUR_GROQ_API_KEY_HERE
```

### 4. Start Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

---

## 🔍 Windows Compatibility Fixes Applied

✅ **Line Endings:** Added `.gitattributes` to handle LF (Mac/Linux) vs CRLF (Windows) automatically.
✅ **Open Permissions:** All files have been set to be fully readable and writable (no restrictions).
✅ **No Mac Junk:** Removed `.DS_Store` files and other macOS-specific hidden files.
✅ **Clean Scripts:** Standard `npm` scripts work on both Windows and Mac.
✅ **Case Sensitivity:** Ensured all file names and imports are consistent (Windows is case-insensitive, but servers are not).

---

## 💡 Troubleshooting on Windows

### **1. "rm -rf" errors**
If you want to clear the build folder on Windows (using Command Prompt), do NOT use `rm -rf`. Instead, use:
```cmd
rd /s /q .next
```
Or simply use **PowerShell**, which supports the `rm -rf` alias.

### **2. Execution Policy (PowerShell)**
If you get an error that "scripts are disabled on this system", run this command in PowerShell as Administrator:
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

### **3. Terminal Choice**
We recommend using **Git Bash** or the **VS Code Integrated Terminal** for the smoothest experience on Windows.

---

**Your website is now 100% compatible with Windows hosting and development!** 🚀
