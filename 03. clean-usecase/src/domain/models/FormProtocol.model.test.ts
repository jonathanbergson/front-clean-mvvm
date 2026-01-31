import { describe, expect, it, vi } from "vitest";
import { FormProtocolModel } from "./FormProtocol.model";

describe("FormProtocolModel", () => {
  it("deve possuir valores iniciais", () => {
    const formProtocol = new FormProtocolModel();
    expect(formProtocol.isLoading).toBe(false);
    expect(formProtocol.errors.name.length).toBe(0);
    expect(formProtocol.errors.email.length).toBe(0);
    expect(formProtocol.errors.document.length).toBe(0);
    expect(formProtocol.errors.presenter.length).toBe(0);
    expect(formProtocol.errors.financialManager.length).toBe(0);
    expect(formProtocol.values.name).toBe("");
    expect(formProtocol.values.email).toBe("");
    expect(formProtocol.values.document).toBe("");
    expect(formProtocol.values.presenter).toBe("");
    expect(formProtocol.values.financialManager).toBe("");
  });

  it("deve exibir erros ao definir um valores inválidos", () => {
    const formProtocol = new FormProtocolModel();
    formProtocol.values = {
      name: "",
      email: "",
      document: "",
      presenter: "",
      financialManager: "",
    };
    expect(formProtocol.errors.name.length).toBe(2);
    // expect(formProtocol.errors.email.length).toBe(2);
    expect(formProtocol.errors.document.length).toBe(2);
    expect(formProtocol.errors.presenter.length).toBe(1);
    expect(formProtocol.errors.financialManager.length).toBe(1);

    formProtocol.values = {
      name: "Full Name",
      email: "mail@domain.com",
      document: "12345678901",
      presenter: "dafh-askj-sadf",
      financialManager: "uhre-kjfb-sadkf",
    };
    expect(formProtocol.errors.name.length).toBe(0);
    // expect(formProtocol.errors.email.length).toBe(0);
    expect(formProtocol.errors.document.length).toBe(0);
    expect(formProtocol.errors.presenter.length).toBe(0);
    expect(formProtocol.errors.financialManager.length).toBe(0);
  });

  it("deve chamar os eventos `search` e `submit` ao executar a função `handleSubmit`", async () => {
    const onSubmit = vi.fn().mockResolvedValue(undefined);
    const values = {
      name: "Full Name",
      email: "mail@domain.com",
      document: "12345678901",
      presenter: "dafh-askj-sadf",
      financialManager: "uhre-kjfb-sadkf",
    };

    const formProtocol = new FormProtocolModel();
    formProtocol.register("submit", onSubmit);
    formProtocol.values = values;

    await formProtocol.handleSubmit();
    expect(onSubmit).toHaveBeenCalledOnce();
    expect(onSubmit).toHaveBeenCalledWith(values);
    expect(formProtocol.isLoading).toBe(false);
  });
});
