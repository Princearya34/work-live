# Work Live: Desktop Agent Application

## Overview

**Work Live** is a real-time employee performance monitoring application designed to enhance productivity tracking and ensure accountability. The system includes a desktop agent application integrated with a robust backend, providing powerful tools for both employees and administrators.

---

## Features

### 🛡️ Role-Based Access Control (RBAC)
- **Employee Administrator**: 
  - Oversees all employees
  - Receives real-time activity reports
  - Manages employee access and configurations
- **Employee**: 
  - Can view and track their personal productivity data

---

### 🕒 Employee Activity Tracking
- Monitors the following in real-time:
  - **Active/Inactive Time**
  - **Mouse and Keyboard Movements**
  - **Application Usage Statistics**
- Sends activity data to the server and dashboard for administrative oversight.

---

### 📸 Dynamic Screenshot Management
- Captures periodic screenshots of employee desktops.
- Screenshots are:
  - Stored in **AWS S3** for durability and scalability
  - **Queued locally** during network disruptions to avoid data loss
  - Uploaded once connectivity is restored

---

## ⚙️ Tech Stack

| Component       | Technology         |
|----------------|--------------------|
| Backend         | Python, FastAPI     |
| Frontend        | React.js            |
| Database        | MongoDB             |
| Cloud Storage   | AWS S3              |
| Platform        | Desktop Agent (Cross-platform support planned) |

---

## Future Enhancements
- Cross-platform support (Linux, macOS)
- Intelligent productivity analytics
- Integration with HRMS tools
- Enhanced privacy and consent features

---

## License

MIT License. See `LICENSE` file for details.
