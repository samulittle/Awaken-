"use client";
import { useState, useEffect } from "react";

export default function AudioButton() {
  const [isPlaying, setIsPlaying] = useState(true); // Começa como true para autoplay
  const [showMessage, setShowMessage] = useState(false);

  // Inicializar e tocar o áudio quando o componente montar
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Crie a instância de áudio
      window.audioInstance = new Audio(
        "https://cdn.chillhop.com/serve.php/?mp3=8094"
      );
      window.audioInstance.loop = true;

      // Tente tocar o áudio automaticamente
      const playPromise = window.audioInstance.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Reprodução iniciada com sucesso
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 3000);
          })
          .catch((error) => {
            // Autoplay foi bloqueado pelo navegador
            console.error("Autoplay bloqueado:", error);
            setIsPlaying(false);
          });
      }
    }

    // Limpar o áudio quando o componente desmontar
    return () => {
      if (window.audioInstance) {
        window.audioInstance.pause();
        window.audioInstance.src = "";
        window.audioInstance = null;
      }
    };
  }, []);

  // Função para tocar/pausar o áudio
  const toggleAudio = () => {
    if (isPlaying) {
      // Se estiver tocando, pause
      window.audioInstance?.pause();
      setIsPlaying(false);
    } else {
      // Se estiver pausado, toque
      if (window.audioInstance) {
        const playPromise = window.audioInstance.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              setShowMessage(true);
              setTimeout(() => setShowMessage(false), 3000);
            })
            .catch((error) => {
              console.error("Erro ao reproduzir áudio:", error);
            });
        }
      }
    }
  };

  return (
    <>
      <button
        className="fixed bottom-6 right-6 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all"
        onClick={toggleAudio}
        aria-label={isPlaying ? "Pausar música" : "Tocar música"}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          {isPlaying ? (
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          ) : (
            <path d="M8 5v14l11-7z" />
          )}
        </svg>
      </button>

      {showMessage && (
        <div className="fixed bottom-20 right-6 z-20 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-white text-sm animate-fade-in-out">
          Música ambiente ativada
        </div>
      )}
    </>
  );
}
