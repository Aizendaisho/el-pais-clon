import React from "react";

function SecondHeader() {
  const fechaActual = new Date();

  function formatearFecha(fecha: Date): string {
    const opcionesDeFormato: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    return fecha.toLocaleDateString("es-ES", opcionesDeFormato);
  }

  function formatearFechaActualizado(fecha: Date): string {
    const hora = fecha.getHours().toString().padStart(2, "0");
    const minutos = fecha.getMinutes().toString().padStart(2, "0");
    const zonaHorariaOffset = -fecha.getTimezoneOffset() / 60;
    const zonaHoraria =
      zonaHorariaOffset >= 0
        ? `+${zonaHorariaOffset}`
        : zonaHorariaOffset.toString();

    return `Actualizado ${hora}:${minutos} GMT${zonaHoraria}`;
  }

  return (
    <div className="flex items-center justify-between p-2">
      <div className="text-xs">
        {formatearFecha(fechaActual)} <span className="text-gray-400">|</span>{" "}
        <span>{formatearFechaActualizado(fechaActual)}</span>{" "}
        <span className="text-gray-400"></span>
      </div>

      <button className=" bg-yellow-400 text-black font-extrabold uppercase px-1.5 py-1 text-xs ">
        Suscribírte
      </button>
    </div>
  );
}

export default SecondHeader;
