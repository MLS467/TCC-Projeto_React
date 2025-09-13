import { FiPrinter, FiDownload, FiSend, FiEdit } from "react-icons/fi";
import {
  ButtonContainer,
  DocumentButton,
  ButtonIcon,
  ButtonText,
} from "./style";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { toast } from "sonner";

const DocumentButtons = ({
  onEdit,
  onConfirm,
  confirmText = "Confirmar e Enviar",
  editText = "Editar",
  showConfirm = true,
  records = false,
}) => {
  const saveInPdf = async () => {
    try {
      // Procurar primeiro por conteudo-pdf, depois por fallbacks
      let element = document.getElementById("conteudo-pdf");

      if (!element) {
        // Fallback: procurar pelo container do documento com diferentes seletores
        element =
          document.querySelector("[data-pdf-content]") ||
          document.querySelector(".conteudo-pdf") ||
          document.querySelector(".document-content") ||
          document.querySelector(".document-wrapper") ||
          document.querySelector("div[id*='conteudo']");
      }

      if (!element) {
        console.error("Elemento não encontrado. Seletores tentados:");
        console.error("- #conteudo-pdf");
        console.error("- [data-pdf-content]");
        console.error("- .sc-dqVVQx.gvCRQx");
        console.error("- .document-content");
        console.error("- .document-wrapper");
        toast.error(
          "Erro: Não foi possível encontrar o conteúdo para gerar o PDF"
        );
        return;
      }

      toast.info("Gerando PDF do elemento:", element);

      const canvas = await html2canvas(element, {
        useCORS: true,
        allowTaint: true,
        scale: 2, // Melhor qualidade
        backgroundColor: "#ffffff",
        width: element.scrollWidth,
        height: element.scrollHeight,
        scrollX: 0,
        scrollY: 0,
        logging: false, // Desabilitar logs do html2canvas
        ignoreElements: (element) => {
          // Ignorar botões flutuantes no PDF
          return (
            element.className &&
            typeof element.className === "string" &&
            element.className.includes("ButtonsContainer")
          );
        },
      });

      const imgData = canvas.toDataURL("image/png", 1.0);

      // Configurar PDF para formato A4
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Calcular dimensões mantendo proporção
      const imgWidth = pdfWidth - 20; // Margem de 10mm em cada lado
      const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

      // Centralizar horizontalmente
      const x = (pdfWidth - imgWidth) / 2;
      let y = 10; // Margem superior

      // Se a imagem for maior que a página, redimensionar
      if (imgHeight > pdfHeight - 20) {
        const ratio = (pdfHeight - 20) / imgHeight;
        const newWidth = imgWidth * ratio;
        const newHeight = imgHeight * ratio;
        const newX = (pdfWidth - newWidth) / 2;

        pdf.addImage(imgData, "PNG", newX, y, newWidth, newHeight);
      } else {
        pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
      }

      // Salvar com nome mais descritivo
      const date = new Date().toLocaleDateString("pt-BR").replace(/\//g, "-");
      pdf.save(`AtendeBem-Documento-${date}.pdf`);

      toast.success("PDF gerado com sucesso!");
    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
      toast.error("Erro ao gerar PDF. Verifique o console para mais detalhes.");
    }
  };

  const printScreen = () => {
    window.print();
  };

  return (
    <ButtonContainer>
      <DocumentButton onClick={printScreen} variant="print">
        <ButtonIcon>
          <FiPrinter />
        </ButtonIcon>
        <ButtonText>Imprimir</ButtonText>
      </DocumentButton>

      <DocumentButton onClick={saveInPdf} variant="save">
        <ButtonIcon>
          <FiDownload />
        </ButtonIcon>
        <ButtonText>Salvar PDF</ButtonText>
      </DocumentButton>

      {!records && (
        <>
          <DocumentButton variant="edit" onClick={onEdit}>
            <ButtonIcon>
              <FiEdit />
            </ButtonIcon>
            <ButtonText>{editText}</ButtonText>
          </DocumentButton>
          {showConfirm && (
            <DocumentButton variant="send" onClick={onConfirm}>
              <ButtonIcon>
                <FiSend />
              </ButtonIcon>
              <ButtonText>{confirmText}</ButtonText>
            </DocumentButton>
          )}
        </>
      )}
    </ButtonContainer>
  );
};

export default DocumentButtons;
