// Data export utilities for generating reports

class ExportData {
  // Export data as JSON
  exportJSON(data, filename) {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    this.downloadFile(blob, filename);
  }

  // Export data as CSV
  exportCSV(data, filename) {
    if (!data || data.length === 0) {
      console.error('No data to export');
      return;
    }

    // Get headers from first object
    const headers = Object.keys(data[0]);
    const csvContent = [
      headers.join(','),
      ...data.map(row => 
        headers.map(header => {
          const value = row[header];
          // Escape commas and quotes in values
          if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
            return `"${value.replace(/"/g, '""')}"`;
          }
          return value;
        }).join(',')
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    this.downloadFile(blob, filename);
  }

  // Generate HTML report
  generateHTMLReport(title, sections) {
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${title}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; }
          h1 { color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px; }
          h2 { color: #555; margin-top: 30px; }
          table { border-collapse: collapse; width: 100%; margin-top: 20px; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          th { background-color: #f2f2f2; font-weight: bold; }
          tr:nth-child(even) { background-color: #f9f9f9; }
          .info-section { margin: 20px 0; }
          .info-section p { margin: 5px 0; }
          .timestamp { color: #666; font-size: 0.9em; margin-top: 40px; }
        </style>
      </head>
      <body>
        <h1>${title}</h1>
        ${sections.map(section => this.generateHTMLSection(section)).join('')}
        <p class="timestamp">Generated on: ${new Date().toLocaleString()}</p>
      </body>
      </html>
    `;

    const blob = new Blob([html], { type: 'text/html' });
    return blob;
  }

  // Generate HTML section
  generateHTMLSection(section) {
    let html = `<div class="info-section">`;
    html += `<h2>${section.title}</h2>`;

    if (section.type === 'table' && section.data) {
      html += '<table>';
      
      // Headers
      if (section.headers) {
        html += '<thead><tr>';
        section.headers.forEach(header => {
          html += `<th>${header}</th>`;
        });
        html += '</tr></thead>';
      }

      // Data rows
      html += '<tbody>';
      section.data.forEach(row => {
        html += '<tr>';
        if (Array.isArray(row)) {
          row.forEach(cell => {
            html += `<td>${cell}</td>`;
          });
        } else {
          Object.values(row).forEach(cell => {
            html += `<td>${cell}</td>`;
          });
        }
        html += '</tr>';
      });
      html += '</tbody></table>';
    } else if (section.type === 'list' && section.items) {
      html += '<ul>';
      section.items.forEach(item => {
        html += `<li>${item}</li>`;
      });
      html += '</ul>';
    } else if (section.content) {
      html += `<p>${section.content}</p>`;
    }

    html += '</div>';
    return html;
  }

  // Generate care plan document
  generateCarePlanDocument(resident, carePlans) {
    const sections = [
      {
        title: 'Resident Information',
        content: `
          Name: ${resident.name}<br>
          Date of Birth: ${resident.dateOfBirth}<br>
          Room: ${resident.room}<br>
          Primary Diagnosis: ${resident.primaryDiagnosis}<br>
          Allergies: ${resident.allergies}
        `
      },
      {
        title: 'Care Plans',
        type: 'table',
        headers: ['Category', 'Goal', 'Interventions', 'Frequency'],
        data: carePlans.map(plan => [
          plan.category,
          plan.goal,
          plan.interventions,
          plan.frequency
        ])
      }
    ];

    const blob = this.generateHTMLReport(`Care Plan - ${resident.name}`, sections);
    this.downloadFile(blob, `care_plan_${resident.name.replace(/\s+/g, '_')}.html`);
  }

  // Generate medication record
  generateMedicationRecord(resident, medications, administrations) {
    const sections = [
      {
        title: 'Resident Information',
        content: `
          Name: ${resident.name}<br>
          Room: ${resident.room}<br>
          Allergies: ${resident.allergies}
        `
      },
      {
        title: 'Current Medications',
        type: 'table',
        headers: ['Medication', 'Dosage', 'Frequency', 'Route', 'Instructions'],
        data: medications.map(med => [
          med.name,
          med.dosage,
          med.frequency,
          med.route,
          med.instructions || 'N/A'
        ])
      },
      {
        title: 'Recent Administrations',
        type: 'table',
        headers: ['Date/Time', 'Medication', 'Given By', 'Notes'],
        data: administrations.map(admin => [
          new Date(admin.timestamp).toLocaleString(),
          admin.medication,
          admin.givenBy,
          admin.notes || 'N/A'
        ])
      }
    ];

    const blob = this.generateHTMLReport(`Medication Record - ${resident.name}`, sections);
    this.downloadFile(blob, `medication_record_${resident.name.replace(/\s+/g, '_')}.html`);
  }

  // Download file utility
  downloadFile(blob, filename) {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  // Export monthly package
  async exportMonthlyPackage(month, year, data) {
    // This would typically create a ZIP file with all documents
    // For now, we'll create a comprehensive HTML report
    
    const sections = [
      {
        title: 'Facility Information',
        content: `
          Facility: ${data.facilityName}<br>
          Report Period: ${month}/${year}<br>
          Generated: ${new Date().toLocaleString()}
        `
      },
      {
        title: 'Resident Summary',
        content: `Total Residents: ${data.residents.length}`
      },
      {
        title: 'Residents',
        type: 'table',
        headers: ['Name', 'Room', 'Status', 'Primary Diagnosis'],
        data: data.residents.map(r => [r.name, r.room, r.status, r.primaryDiagnosis])
      },
      {
        title: 'Care Notes Summary',
        content: `Total Care Notes: ${data.careNotes.length}`
      },
      {
        title: 'Medication Administration Summary',
        content: `Total Administrations: ${data.medicationAdministrations.length}`
      }
    ];

    const blob = this.generateHTMLReport(`Monthly Report - ${month}/${year}`, sections);
    this.downloadFile(blob, `monthly_report_${year}_${month}.html`);
  }
}

// Create and export singleton instance
const exportData = new ExportData();
export default exportData;
