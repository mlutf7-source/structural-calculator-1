import { jsPDF } from 'jspdf';

export const generatePDF = (
  title: string,
    lines: string[]
    ) => {
      const doc = new jsPDF();

        doc.setFontSize(16);
          doc.text(title, 20, 20);

            let y = 40;

              lines.forEach((line) => {
                  doc.text(line, 20, y);
                      y += 10;
                        });

                          doc.save(`${title}.pdf`);
                          };