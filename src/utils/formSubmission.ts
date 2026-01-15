/**
 * Utility function to save form submissions to localStorage
 * Data can be exported via console or a utility script
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

const STORAGE_KEY = 'kutlu_form_submissions';

/**
 * Gets all form submissions from localStorage
 */
export function getFormSubmissions(): FormSubmissionData[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading form submissions:', error);
    return [];
  }
}

/**
 * Saves form submission to localStorage
 * Also logs to console for easy access
 */
export function saveFormSubmission(data: FormSubmissionData): void {
  const timestamp = new Date().toISOString();
  const submission = {
    ...data,
    timestamp,
    id: `${data.type}-${Date.now()}`,
  };

  // Get existing submissions
  const existing = getFormSubmissions();
  
  // Add new submission
  const updated = [...existing, submission];
  
  // Save to localStorage
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated, null, 2));
    
    // Also log to console for easy access
    console.log('=== FORM SUBMISSION SAVED ===');
    console.log('Type:', data.type);
    console.log('Timestamp:', timestamp);
    console.log('Data:', submission);
    console.log('All submissions:', updated);
    console.log('============================');
    
    // Export to console as JSON for easy copy
    console.log('\n=== COPY THIS JSON ===');
    console.log(JSON.stringify(updated, null, 2));
    console.log('======================\n');
  } catch (error) {
    console.error('Error saving form submission:', error);
    throw error;
  }
}

/**
 * Exports all submissions as JSON string
 * Can be used to create a JSON file manually
 */
export function exportSubmissionsAsJSON(): string {
  const submissions = getFormSubmissions();
  return JSON.stringify(submissions, null, 2);
}

/**
 * Clears all form submissions (for testing/cleanup)
 */
export function clearFormSubmissions(): void {
  localStorage.removeItem(STORAGE_KEY);
  console.log('All form submissions cleared');
}


