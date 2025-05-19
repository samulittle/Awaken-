"use client";
import PulsingBackground from "../components/PulsingBackground";
import AudioButton from "../components/audiobutton";
import Link from "next/link";
import { useState, FormEvent, ChangeEvent } from "react";

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio para API
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);

      // Redirecionar após cadastro bem-sucedido
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    }, 1500);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 relative">
      <PulsingBackground />

      <div className="z-10 w-full max-w-md flex flex-col items-center justify-center text-center bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-2xl">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <h1 className="text-5xl font-bold mb-4 font-serif italic">Awaken</h1>
        </Link>

        {success ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h2 className="text-2xl font-medium mb-2">Cadastro realizado!</h2>
            <p className="text-white/70">Redirecionando para o login...</p>
          </div>
        ) : (
          <>
            <p className="text-xl mb-8 font-light">
              Crie sua conta e comece a meditar
            </p>

            <form onSubmit={handleSubmit} className="w-full space-y-4">
              <div className="text-left">
                <label className="block text-sm text-white/70 mb-1 ml-1">
                  Nome completo
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full py-3 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="Digite seu nome"
                />
              </div>

              <div className="text-left">
                <label className="block text-sm text-white/70 mb-1 ml-1">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full py-3 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="Digite seu e-mail"
                />
              </div>

              <div className="text-left">
                <label className="block text-sm text-white/70 mb-1 ml-1">
                  Senha
                </label>
                <input
                  type="password"
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  required
                  className="w-full py-3 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="Crie uma senha"
                />
              </div>

              <div className="text-left">
                <label className="block text-sm text-white/70 mb-1 ml-1">
                  Confirmar senha
                </label>
                <input
                  type="password"
                  name="confirmarSenha"
                  value={formData.confirmarSenha}
                  onChange={handleChange}
                  required
                  className="w-full py-3 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="Confirme sua senha"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-full bg-amber-300 text-purple-900 font-medium hover:bg-amber-200 transition-all mt-6 disabled:opacity-70"
              >
                {isSubmitting ? "Processando..." : "Criar conta"}
              </button>
            </form>

            <p className="mt-8 text-sm text-white/70">
              Já tem uma conta?{" "}
              <Link href="/" className="text-white hover:underline">
                Faça login
              </Link>
            </p>
          </>
        )}
      </div>

      <AudioButton />
    </main>
  );
}
