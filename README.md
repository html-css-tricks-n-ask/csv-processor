# 📊 CSV Processor System

A React-based application to **upload, process, sort, and export CSV data** efficiently.
Built with a clean UI and configurable processing options.

---

## 🚀 Features

* 📂 Upload CSV files
* 📋 Parse and display data in table format
* 🔄 Sorting functionality (ascending/descending)
* ⚙️ Configurable processing options
* 📥 Export processed data as CSV
* ❌ Error handling for invalid files
* 📊 Dynamic data rendering

---

## 🛠 Tech Stack

* React.js
* JavaScript (ES6+)
* HTML5 File API
* CSS (Custom UI)

---

## 📁 Project Structure

```id="f8z0sy"
src/
│
├── components/
│   ├── FileUpload.js
│   ├── DataTable.js
│   ├── ConfigPanel.js
│   ├── ExportButton.js
│
├── utils/
│   ├── csvParser.js
│   ├── sortUtils.js
│
├── App.js
```

---

## ⚙️ Setup Instructions

```bash id="q3p6g1"
git clone https://github.com/your-username/csv-processor.git
cd csv-processor
npm install
npm start
```

---

## 📊 How It Works

1. Upload a `.csv` file
2. Data is parsed into JSON format
3. Displayed in a dynamic table
4. Apply sorting / configuration
5. Export updated data as CSV

---

## 📄 Sample CSV Format

```csv id="c3tkv9"
Name,Age,City
John,28,Delhi
Rahul,32,Mumbai
Anita,25,Bangalore
```

---

## ⚙️ Key Functionalities

### 🔹 CSV Parsing

* Converts CSV → JSON
* Handles headers dynamically

### 🔹 Sorting

* Sort by any column
* Ascending / Descending toggle

### 🔹 Export

* Converts processed data → CSV
* One-click download

---

## ⚠️ Error Handling

* Invalid file format detection
* Empty file validation
* Missing headers handling

---

## 🔮 Future Improvements

* Large file support (pagination)
* Column filtering
* Search functionality
* Drag & drop upload
* Backend integration

---

## 👨‍💻 Author

Bharat Solanki

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
