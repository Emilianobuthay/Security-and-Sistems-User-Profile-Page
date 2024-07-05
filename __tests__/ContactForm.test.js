/* import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "../components/ContactForm";
import { sendEmail } from "../lib/sendEmail";
import toast from "react-hot-toast";

// Mockear las funciones que no queremos que se ejecuten realmente durante las pruebas
jest.mock("../lib/sendEmail");
jest.mock("react-hot-toast");

describe("ContactForm", () => {
  beforeEach(() => {
    sendEmail.mockReset();
    toast.success.mockReset();
    toast.error.mockReset();
  });

  test("renders the form correctly", () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/Nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mensaje/i)).toBeInTheDocument();
    expect(screen.getByText(/Enviar/i)).toBeInTheDocument();
  });

  test("validates the form before submitting", async () => {
    render(<ContactForm />);

    fireEvent.click(screen.getByText(/Enviar/i));

    expect(sendEmail).not.toHaveBeenCalled();
    expect(toast.error).toHaveBeenCalled();
  });

  test("submits the form successfully", async () => {
    sendEmail.mockResolvedValue({ data: "success" });

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/Nombre/i), { target: { value: "Test User" } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByLabelText(/Mensaje/i), { target: { value: "This is a test message." } });

    fireEvent.click(screen.getByText(/Enviar/i));

    expect(sendEmail).toHaveBeenCalled();
    expect(toast.success).toHaveBeenCalledWith("Email enviado!🚀");
  });

  test("handles submission failure", async () => {
    sendEmail.mockResolvedValue({ error: "Error sending email" });

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/Nombre/i), { target: { value: "Test User" } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByLabelText(/Mensaje/i), { target: { value: "This is a test message." } });

    fireEvent.click(screen.getByText(/Enviar/i));

    expect(sendEmail).toHaveBeenCalled();
    expect(toast.error).toHaveBeenCalledWith("Error sending email");
  });
}); */
