import { describe, expect, it, vi } from "vitest";
import { FieldPersonModel } from "./FieldPerson.model";

describe("FieldPersonModel", () => {
  it("deve possuir valores iniciais", () => {
    const fieldPerson = new FieldPersonModel();
    expect(fieldPerson.isLoading).toBe(false);
    expect(fieldPerson.errors.document.length).toBe(0);
    expect(fieldPerson.values.document).toBe("");
    expect(fieldPerson.person).toBeNull();
  });

  it("deve exibir erros ao definir um valores inválidos", () => {
    const fieldPerson = new FieldPersonModel();
    fieldPerson.values = { document: "" };
    expect(fieldPerson.errors.document.length).toBe(2);
    expect(fieldPerson.errors.document).toContain("Documento obrigatório");
    expect(fieldPerson.errors.document).toContain("Tamanho mínimo de 11 caracteres");
    fieldPerson.values = { document: "123" };
    expect(fieldPerson.errors.document.length).toBe(1);
    expect(fieldPerson.errors.document).not.toContain("Documento obrigatório");
    expect(fieldPerson.errors.document).toContain("Tamanho mínimo de 11 caracteres");
    fieldPerson.values = { document: "12345678901" };
    expect(fieldPerson.errors.document.length).toBe(0);
    expect(fieldPerson.errors.document).not.toContain("Documento obrigatório");
    expect(fieldPerson.errors.document).not.toContain("Tamanho mínimo de 11 caracteres");
  });

  it("deve definir e limpar o campo `person", () => {
    const fieldPerson = new FieldPersonModel();
    const person = { id: "123", name: "Full Name", email: "mail@domain.com" };
    fieldPerson.person = person;
    expect(fieldPerson.person).toBe(person);
    fieldPerson.person = null;
    expect(fieldPerson.person).toBeNull();
  });

  it("deve chamar os eventos `search` e `submit` ao executar a função `handleSubmit`", async () => {
    const onSearch = vi.fn().mockResolvedValue(undefined);
    const onSubmit = vi.fn().mockResolvedValue(undefined);
    const person = { id: "123", name: "Full Name", email: "mail@domain.com" };
    const values = { document: "12345678901" };

    const fieldPerson = new FieldPersonModel();
    fieldPerson.register("search", onSearch);
    fieldPerson.register("submit", onSubmit);
    fieldPerson.values = values;
    fieldPerson.person = person;

    await fieldPerson.handleSubmit();
    expect(fieldPerson.person).toBeNull();
    expect(onSearch).toHaveBeenCalledOnce();
    expect(onSearch).toHaveBeenCalledWith(undefined);
    expect(onSubmit).toHaveBeenCalledOnce();
    expect(onSubmit).toHaveBeenCalledWith(values);
    expect(fieldPerson.isLoading).toBe(false);
  });
});
