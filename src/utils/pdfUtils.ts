
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export async function generatePDF(
  content: string,
  title: string,
  filename: string
): Promise<void> {
  // Create a temporary div to properly render the content
  const contentDiv = document.createElement('div');
  contentDiv.innerHTML = content.replace(/\n/g, '<br>');
  contentDiv.style.padding = '20px';
  contentDiv.style.color = 'black';
  contentDiv.style.backgroundColor = 'white';
  contentDiv.style.width = '595px'; // A4 width in pixels at 72 dpi
  document.body.appendChild(contentDiv);
  
  // Capture the content as an image
  const canvas = await html2canvas(contentDiv, {
    scale: 2, // Higher resolution
    backgroundColor: '#ffffff',
  });
  
  document.body.removeChild(contentDiv);
  
  // Create PDF with A4 dimensions
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });
  
  // Add title
  pdf.setFontSize(16);
  pdf.text(title, 20, 20);
  pdf.setFontSize(12);
  
  // Add image of content
  const imgData = canvas.toDataURL('image/png');
  pdf.addImage(imgData, 'PNG', 10, 30, 190, 0, '', 'FAST');
  
  // Download the PDF
  pdf.save(`${filename}.pdf`);
}
