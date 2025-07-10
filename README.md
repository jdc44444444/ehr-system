# EHR System - Electronic Health Records for Assisted Living Facilities

A comprehensive Electronic Health Records (EHR) system designed specifically for assisted living facilities, built with React and modern web technologies.

## Features

### Core Functionality
- **Resident Management**: Complete resident profiles with medical history, allergies, and emergency contacts
- **Medication Administration**: Digital MAR (Medication Administration Record) with scheduling and tracking
- **Care Documentation**: Nursing notes, incident reports, and daily care tracking
- **Care Plans**: Individualized care planning with goals and interventions
- **User Management**: Role-based access control for administrators, nurses, and medication technicians
- **Reports & Export**: Generate and export monthly documentation packages

### Key Features
- 📱 Responsive design - works on desktop, tablet, and mobile
- 🔒 Secure authentication with role-based permissions
- 📊 Real-time dashboard with critical alerts
- 📄 Export capabilities for Word documents and Excel spreadsheets
- 🖨️ Print-friendly layouts for physical documentation
- 💾 Local data storage using IndexedDB
- 🔍 Search and filter capabilities across all modules

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ehr-system.git
cd ehr-system

Install dependencies:

bashnpm install

Start the development server:

bashnpm start

Open http://localhost:3000 to view it in the browser.

Default Login Credentials
For testing purposes, use these credentials:
Administrator:

Email: admin@example.com
Password: admin123

Nurse:

Email: nurse@example.com
Password: nurse123

Medication Technician:

Email: tech@example.com
Password: tech123

Project Structure
ehr-system/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/            # Page components
│   ├── utils/            # Utility functions
│   ├── App.js            # Main application component
│   ├── App.css           # Application styles
│   ├── index.js          # Entry point
│   └── index.css         # Global styles
├── package.json
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md
Available Scripts

npm start - Runs the app in development mode
npm test - Launches the test runner
npm run build - Builds the app for production
npm run eject - Ejects from Create React App (one-way operation)

Technology Stack

Frontend Framework: React 18
Routing: React Router v6
Styling: Tailwind CSS
Icons: Lucide React
Storage: IndexedDB for local data persistence
Build Tool: Create React App

Features in Detail
Dashboard

Overview of facility statistics
Recent activities and updates
Critical alerts and notifications
Quick actions for common tasks

Resident Management

Add, edit, and archive resident records
Track medical history and diagnoses
Manage emergency contacts
Document allergies and special needs

Medication Administration

Digital MAR sheets
Medication schedules and reminders
Administration tracking with timestamps
PRN medication documentation

Care Documentation

Shift-based nursing notes
Incident reporting
Activity documentation
Behavioral tracking

Reports

Export nursing notes as Word documents
Generate MAR sheets in Excel format
Create comprehensive monthly packages
Print-friendly formats

Security Considerations
This is a demonstration system. For production use:

Implement proper backend authentication
Use HTTPS for all communications
Encrypt sensitive data
Add audit logging
Implement data backup strategies
Ensure HIPAA compliance

Contributing

Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

License
This project is licensed under the MIT License - see the LICENSE file for details.
Acknowledgments

Built with React and Create React App
Icons by Lucide
Styling with Tailwind CSS
Designed for healthcare professionals in assisted living facilities

Support
For questions or support, please open an issue in the GitHub repository.
