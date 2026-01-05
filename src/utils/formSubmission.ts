/**
 * Utility function to save form submissions to a text file
 */

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  type: 'contact';
}

export interface DiscoveryCallFormData {
  name: string;
  email: string;
  company: string;
  role: string;
  phone?: string;
  projectBrief: string;
  selectedDate: string;
  selectedTime: string;
  type: 'discovery-call';
}

export type FormSubmissionData = ContactFormData | DiscoveryCallFormData;

/**
 * Formats form data into a readable text format
 */
function formatFormData(data: FormSubmissionData): string {
  const timestamp = new Date().toISOString();
  const date = new Date(timestamp).toLocaleString('tr-TR', {
    timeZone: 'Europe/Istanbul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  let content = `========================================\n`;
  content += `FORM SUBMISSION - ${data.type.toUpperCase()}\n`;
  content += `========================================\n`;
  content += `Timestamp: ${date}\n`;
  content += `ISO Timestamp: ${timestamp}\n`;
  content += `========================================\n\n`;

  if (data.type === 'contact') {
    content += `CONTACT FORM SUBMISSION\n`;
    content += `----------------------------------------\n`;
    content += `Full Name: ${data.name}\n`;
    content += `Email: ${data.email}\n`;
    content += `Company: ${data.company}\n`;
    content += `Message:\n${data.message}\n`;
  } else if (data.type === 'discovery-call') {
    content += `DISCOVERY CALL REQUEST\n`;
    content += `----------------------------------------\n`;
    content += `Full Name: ${data.name}\n`;
    content += `Email: ${data.email}\n`;
    content += `Company: ${data.company}\n`;
    content += `Role: ${data.role}\n`;
    if (data.phone) {
      content += `Phone: ${data.phone}\n`;
    }
    content += `Selected Date: ${data.selectedDate}\n`;
    content += `Selected Time: ${data.selectedTime}\n`;
    content += `Project Brief:\n${data.projectBrief}\n`;
  }

  content += `\n========================================\n`;
  content += `END OF SUBMISSION\n`;
  content += `========================================\n\n`;

  return content;
}

/**
 * Saves form submission to a text file
 * In a browser environment, this triggers a download
 */
export function saveFormSubmission(data: FormSubmissionData): void {
  const content = formatFormData(data);
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  
  // Create filename with timestamp
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filename = `${data.type}-submission-${timestamp}.txt`;
  link.download = filename;
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  // Also log to console for debugging
  console.log('Form submission saved:', data);
}

